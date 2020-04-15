import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';

const CreateScreen = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { addBlogPost } = useContext(Context);

  return (
    <View>
      <Text style={styels.label}>Enter Title:</Text>
      <TextInput
        style={styels.input}
        value={title}
        onChangeText={(title) => setTitle(title)}
      />
      <Text style={styels.label}>Enter Content:</Text>
      <TextInput
        style={styels.input}
        value={content}
        onChangeText={(content) => setContent(content)}
      />
      <Button
        title="Add Blog Post"
        onPress={() => {
          addBlogPost(title, content, () => {
            navigation.navigate('Index');
          });
        }}
      />
    </View>
  );
};

const styels = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    marginHorizontal: 5,
    marginBottom: 15,
    padding: 5
  },
  label: {
    fontSize: 20,
    marginBottom: 5
  }
});

export default CreateScreen;