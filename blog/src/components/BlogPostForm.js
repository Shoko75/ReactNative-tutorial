import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const BlogPostForm = ({ onSubmit, initialValues }) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);

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
        title="Save Blog Post"
        onPress={() => onSubmit(title, content)}
      />
    </View>
  );
};

// If the props is emputy, set default value
// ( When come from create screen )
BlogPostForm.defaultProps = {
  initialValues: {
    title: '',
    content: ''
  }
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

export default BlogPostForm;