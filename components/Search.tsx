import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import debounce from 'lodash.debounce'; // Import debounce from lodash
import { Color, FontFamily, FontSize } from '../GlobalStyles';

// Define prop types
type SearchBarProps = {
  editable?: boolean; // Optional prop to control if the text field is editable
  onChangeText?: (text: string) => void; // Optional callback to handle text changes
};

const SearchBar: React.FC<SearchBarProps> = ({
  editable = false,
  onChangeText,
}) => {
  const [text, setText] = useState('');

  // Debounced version of the onChangeText callback
  const debouncedOnChange = debounce((newText: string) => {
    if (onChangeText) {
      onChangeText(newText);
    }
  }, 1000); // Debounce delay of 2 seconds

  useEffect(() => {
    debouncedOnChange(text);
  }, [text]);

  const handleChange = (newText: string) => {
    setText(newText);
  };

  return (
    <View style={styles.container}>
      <FontAwesome name="search" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="Search item"
        placeholderTextColor={Color.colorGray_200}
        value={text}
        onChangeText={handleChange}
        editable={editable} // Control editability with prop
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Color.colorWhite,
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 40,
    borderColor: Color.colorGray_200,
    borderWidth: 1,
    width: "100%", // Take full width minus padding
  },
  icon: {
    fontSize: 20,
    color: Color.colorGray_200,
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: FontSize.size_mid,
    color: Color.colorBlack,
    borderBlockColor:Color.colorWhite
  },
});

export default SearchBar;
