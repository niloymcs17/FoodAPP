import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import debounce from 'lodash.debounce';
import { Color, FontSize } from '../GlobalStyles';
import { Searchbar } from 'react-native-paper';

// Define prop types
type SearchBarProps = {
  editable?: boolean; // Optional prop to control if the text field is editable
  onChangeText?: (text: string) => void; // Optional callback to handle text changes
  onPress?: () => void; // Optional callback to handle press events when editable={false}
};

const SearchBar: React.FC<SearchBarProps> = ({
  editable = true, // Default to true to be consistent with Searchbar
  onChangeText,
  onPress,
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
        placeholder={editable ? "Search for food items..." : "Tap to search for food items..."}
        placeholderTextColor={Color.colorGray_200}
        value={text}
        onChangeText={handleChange}
        editable={editable} // Control editability with prop
        style={[
          styles.input,
          !editable && styles.nonEditableInput,
        ]}
        onPress={!editable ? onPress : undefined}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 50,
    marginTop: 10,
    marginBottom: 10,
    width: '100%',
  },
  input: {
    flex: 1,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    fontSize: FontSize.size_mid,
    color: Color.colorBlack,
    backgroundColor: Color.colorWhite,
    borderRadius: 12,
  },
  nonEditableInput: {
    elevation: 6,
    shadowOpacity: 0.15,
    shadowRadius: 6,
    borderWidth: 1,
    borderColor: Color.mainColor + '20', // 20% opacity
  },
});

export default SearchBar;
