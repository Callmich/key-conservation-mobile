import React from "react";
import { View, ScrollView, Text, Button, TouchableOpacity } from "react-native";
import styles from '../../constants/screens/org-onboarding-styles/ToExpect.js';

const ToExpectScreen = props => {
    return (
        <View style={styles.obBody}>
            <ScrollView>
            <Text style={styles.obTitle}>Here's what you can expect:</Text>
            <Text style={styles.obSubtitle}>Overview</Text>
            <Text style={styles.obText}>You already know how Key Conservation can help connect you with individual contributors.</Text>
            <Text style={styles.obSubtitle}>Create your Page</Text>
            <Text style={styles.obText}>
            We'll set up your account and ask you to upload your organization's credentials. You can set up your profile page while you wait for us to verify.
            </Text>
            <Text style={styles.obSubtitle}>Go Visible!</Text>
            <Text style={styles.obTextBottom}>Once we verify your organization, you're all set up to go visible and start adding campaigns.</Text>
            <TouchableOpacity style={styles.obFwdContainer}
                onPress={() => {
                    props.navigation.navigate("KeyConservation")
                }}
            >
                <Text style={styles.obFwdBtnText}>Next</Text>
            </TouchableOpacity>
        </ScrollView>
        </View>
    );
}

export default ToExpectScreen;
