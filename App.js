import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, FlatList } from "react-native";
import { useEffect, useState } from "react";
import { Users } from "./src/api/Users";
import Card from "./components/Card";

export default function App() {

  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState(null);


  useEffect(() => {
    setIsLoading(true);
    Users()
      .then(result => {
        setUsers(result.data.data)
        setIsLoading(false);
      })
      .catch(error => {
        console.log(error);
      })
  }, []);

  const renderItem = ({item}) => {
    return <Card
      avatar={item.avatar}
      firstName={item.first_name}
      lastName={item.last_name}
      email={item.email}></Card>
  };

  return (
    <View style={styles.container}>
      {
        isLoading
          ?
          <Text>Loading..</Text>
          :
          <FlatList
            data={users}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
      }
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    paddingTop: 100,
  },
});
