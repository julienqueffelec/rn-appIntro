import React, { Fragment, Component } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Platform,
  StatusBar
} from "react-native";

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions
} from "react-native/Libraries/NewAppScreen";

import AppIntroSlider from "react-native-app-intro-slider";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMainApp: false,
    };
  }

  doneSliders = () => {
    this.setState({ showMainApp: true });
  };

  skipSliders = () => {
    this.setState({ showMainApp: true });
  };

  render() {
    if (this.state.showMainApp) {
      return (
        <Fragment>
          <StatusBar barStyle="dark-content" />
          <SafeAreaView>
            <ScrollView
              contentInsetAdjustmentBehavior="automatic"
              style={styles.scrollView}
            >
              <Header />
              {global.HermesInternal == null ? null : (
                <View style={styles.engine}>
                  <Text style={styles.footer}>Engine: Hermes</Text>
                </View>
              )}
              <View style={styles.body}>
                <View style={styles.sectionContainer}>
                  <Text style={styles.sectionTitle}>Step One</Text>
                  <Text style={styles.sectionDescription}>
                    Edit <Text style={styles.highlight}>App.js</Text> to change
                    this screen and then come back to see your edits.
                  </Text>
                </View>
                <View style={styles.sectionContainer}>
                  <Text style={styles.sectionTitle}>See Your Changes</Text>
                  <Text style={styles.sectionDescription}>
                    <ReloadInstructions />
                  </Text>
                </View>
                <View style={styles.sectionContainer}>
                  <Text style={styles.sectionTitle}>Debug</Text>
                  <Text style={styles.sectionDescription}>
                    <DebugInstructions />
                  </Text>
                </View>
                <View style={styles.sectionContainer}>
                  <Text style={styles.sectionTitle}>Learn More</Text>
                  <Text style={styles.sectionDescription}>
                    Read the docs to discover what to do next:
                  </Text>
                </View>
                <LearnMoreLinks />
              </View>
            </ScrollView>
          </SafeAreaView>
        </Fragment>
      );
    } else {
      return (
        <AppIntroSlider
          slides={slides}
          onDone={this.doneSliders}
          showSkipButton={true}
          onSkip={this.skipSliders}
        />
      );
    }
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter
  },
  engine: {
    position: "absolute",
    right: 0
  },
  body: {
    backgroundColor: Colors.white
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
    color: Colors.black
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400",
    color: Colors.dark
  },
  highlight: {
    fontWeight: "700"
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: "600",
    padding: 4,
    paddingRight: 12,
    textAlign: "right"
  },
  image: {
    width: 200,
    height: 200
  }
});

const slides = [
  {
    key: 's1',
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.",
    title: 'Mobile',
    titleStyle: styles.title,
    textStyle: styles.text,
    image: {
      uri:
        'https://aboutreact.com/wp-content/uploads/2018/08/mobile_recharge.png',
    },
    imageStyle: styles.image,
    backgroundColor: '#20d2bb',
  },
  {
    key: 's2',
    title: 'Flight',
    titleStyle: styles.title,
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.",
    image: {
      uri:
        'https://aboutreact.com/wp-content/uploads/2018/08/flight_ticket_booking.png',
    },
    imageStyle: styles.image,
    backgroundColor: '#febe29',
  },
  {
    key: 's3',
    title: 'Offers',
    titleStyle: styles.title,
    text:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.',
    image: {
      uri: 'https://aboutreact.com/wp-content/uploads/2018/08/discount1.png',
    },
    imageStyle: styles.image,
    backgroundColor: '#22bcb5',
  },
];

export default App;
