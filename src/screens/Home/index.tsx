import {
  ActivityIndicator,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import { styles } from "./styles";
import { SCORE_TAG, Sentiment } from "../../components/Sentiment";
import { useState } from "react";

import axios from "axios";

export function Home() {
  const [score, setScore] = useState<SCORE_TAG | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSendMessage = async () => {
    try {
      setIsLoading(true);
      const formData = new FormData();
      formData.append("key", "8771422269b572db6adcc699d2695e04");
      formData.append("txt", message);
      formData.append("lang", "pt");

      const response = await axios.post(
        "https://api.meaningcloud.com/sentiment-2.1",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      setScore(response.data.score_tag);
      setIsLoading(false);
    } catch (e) {
      console.log(e)
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Análise de sentimento</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Digite o que está em sua mente..."
          placeholderTextColor="#ffffff99"
          onChangeText={setMessage}
          multiline
        />
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
          disabled={isLoading}
          onPress={handleSendMessage}
        >
          {isLoading ? (
            <ActivityIndicator color={"#FFF"} />
          ) : (
            <FontAwesome color={"#FFF"} name="send" size={24} />
          )}
        </TouchableOpacity>
      </View>

      {score && <Sentiment score={score} />}
    </View>
  );
}
