import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <Text style={styles.avatar}>👨‍💻</Text>
        <Text style={styles.studentName}>Lourence S. Lariosa</Text>
        <Text style={styles.tagline}>ComSci Student ✨</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>📌 Basic Info</Text>
        <Text style={styles.label}>Age:</Text>
        <Text style={styles.info}>21</Text>

        <Text style={styles.label}>Course / Year / Section:</Text>
        <Text style={styles.info}>BSCS 3-4</Text>

        <Text style={styles.divider}>────────────────────</Text>

        <Text style={styles.sectionTitle}>👋 About Me</Text>
        <Text style={styles.info}>
          Passionate computer science student and aiming to be as a Data Scientist in the future and the best for making it happen while enjoying myself.
        </Text>

        <Text style={styles.divider}>────────────────────</Text>

        <Text style={styles.sectionTitle}>🏆 Achievements</Text>
        <Text style={styles.info}>
          • With Honor in Senior High{'\n'}
          •  Top 5 at CODE: YSES{'\n'}
          •  Project: Emerge Hackathon at University of The Philippines - Los Baños, Laguna, 2 Consecutive Years Gold Medal (Dakilang Pagkilala) at Gawad Durungawan{'\n'}
          • Top 1 at DataCamp Overall Ranking (2024 - 2025){'\n'}
        </Text>

        <Text style={styles.divider}>────────────────────</Text>

        <Text style={styles.sectionTitle}>💡 Skills</Text>
        <Text style={styles.info}>
          Python, Java {'\n'}
          Time Management, Problem Solving
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#80bfff",
    justifyContent: "flex-start",
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  profileHeader: {
    alignItems: "center",
    marginBottom: 20,
  },
  avatar: {
    fontSize: 80,
  },
  studentName: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#003f88",
  },
  tagline: {
    backgroundColor: "#ffffffaa",
    paddingHorizontal: 14,
    paddingVertical: 5,
    borderRadius: 20,
    marginTop: 6,
    fontSize: 14,
    fontStyle: "italic",
    color: "#002b5c",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 15,
    padding: 20,
    elevation: 8,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    color: "#004aad",
  },
  label: {
    fontSize: 16,
    fontWeight: "700",
    marginTop: 10,
    color: "#0057b8",
  },
  info: {
    fontSize: 16,
    color: "#333",
    marginLeft: 10,
    marginTop: 2,
  },
  divider: {
    textAlign: "center",
    marginVertical: 10,
    color: "#8ea6c9",
  }
});

