import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import debounce from 'lodash.debounce'; // Import debounce from lodash
import { Color, FontSize } from '../GlobalStyles';
import { Searchbar } from 'react-native-paper';

// Define prop types
type SearchBarProps = {
  editable?: boolean; // Optional prop to control if the text field is editable
  onChangeText?: (text: string) => void; // Optional callback to handle text changes
};

const SearchBar: React.FC<SearchBarProps> = ({
  editable = true, // Default to true to be consistent with Searchbar
  onChangeText,
}) => {
  const [text, setText] = useState('');

  // Debounced version of the onChangeText callback
  const debouncedOnChange = debounce((newText: string) => {
    if (onChangeText) {
      onChangeText(newText);
    }
  }, 1000); // Debounce delay of 1 second

  useEffect(() => {
    debouncedOnChange(text);
  }, [text]);

  const handleChange = (newText: string) => {
    setText(newText);
  };

  return (
    <View style={styles.container}>
      <Searchbar
      theme={{ colors: { primary: Color.mainColor} }}
        placeholder="Search item"
        placeholderTextColor={Color.colorGray_200}
        value={text}
        onChangeText={handleChange}
        editable={editable} // Control editability with prop
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    marginTop:10,
    marginBottom:10,
    width: '100%', // Take full width minus padding
  },
  input: {
    flex: 1,
    elevation:10,
    fontSize: FontSize.size_mid,
    color: Color.colorBlack,
    backgroundColor: Color.colorWhite, // Ensure the background color matches the container
  },
});

export default SearchBar;
