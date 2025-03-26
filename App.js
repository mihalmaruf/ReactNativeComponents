import { Button, LogBox, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import Counter from './components/Counter';
import Carousel from './components/Carousel';
import DataFetch from './components/DataFetch';
import Dropdown from './components/Dropdown';
import ModalView from './components/ModalView';
import MultiStepForm from './components/MultiStepForm';
import SearchFilter from './components/SearchFilter';
import Switch from './components/Switch';
import Tabs from './components/Tabs';
import TodoList from './components/TodoList';
import { useState } from 'react';
import FormValidation from './components/FormValidation';

LogBox.ignoreLogs(['VirtualizedLists should never be nested']);

export default function App() {
  const [modal, setModal] = useState(false);
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Counter />
          <Carousel />
          <DataFetch />
          <Dropdown />
          <Button title="Open Modal" onPress={() => setModal(true)} />
          <ModalView visible={modal} onClose={() => setModal(false)} >
            <Text>Modal Content</Text>
          </ModalView>
          <MultiStepForm />
          <SearchFilter />
          <Switch />
          <Tabs />
          <TodoList />
          <FormValidation />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 20,
  },
});
