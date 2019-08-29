import React from 'react';
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  Alert
} from 'react-native';
import { ScrollView, NavigationEvents } from 'react-navigation';
import { connect } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { postCampaignUpdate, getCampaigns, clearMedia } from '../store/actions';
import BackButton from '../components/BackButton';
import PublishButton from '../components/PublishButton';
import UploadMedia from '../components/UploadMedia';
import { AmpEvent } from '../components/withAmplitude';

class CreateCampUpdateScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Update Post',
      headerStyle: {
        backgroundColor: '#323338'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        textAlign: 'center',
        flexGrow: 1,
        alignSelf: 'center',
        fontFamily: 'OpenSans-SemiBold'
      },
      headerLeft: <BackButton navigation={navigation} />,
      headerRight: (
        <PublishButton
          navigation={navigation}
          pressAction={navigation.getParam('publish')}
        />
      )
    };
  };
  state = {
    update_desc: ''
  };
  componentDidMount() {
    this.props.navigation.setParams({ publish: this.publish });
  }
  publish = async () => {
    if (!this.props.mediaUpload || !this.state.update_desc) {
      const errorMessage =
        'Form incomplete. Please include:' +
        (this.props.mediaUpload ? '' : '\n    - Update Image') +
        (this.state.update_desc ? '' : '\n    - Update Details');
      return Alert.alert('Error', errorMessage);
    } else {
      const campUpdate = {
        ...this.state,
        users_id: this.props.currentUserProfile.id,
        camp_id: this.props.selectedCampaign.camp_id,
        update_img: this.props.mediaUpload
      };
      await this.props.postCampaignUpdate(campUpdate);
      AmpEvent('Campaign Update Post', { campaignId: campUpdate.camp_id });
      this.props.navigation.navigate('Home');
    }
  };
  clearState = () => {
    this.setState({
      update_desc: ''
    });
  };
  render() {
    return (
      <KeyboardAvoidingView
        behavior='padding'
        keyboardVerticalOffset={90}
        enabled={Platform.OS === 'android' ? true : false}
      >
        <KeyboardAwareScrollView>
          <ScrollView
            contentContainerStyle={{
              backgroundColor: '#fff',
              minHeight: '100%'
            }}
          >
            <NavigationEvents
              onWillFocus={this.props.clearMedia}
              onDidBlur={this.clearState}
            />
            <View style={styles.sectionContainer}>
              <View style={styles.sections}>
                <UploadMedia />
              </View>

              <View style={styles.sections}>
                <View style={styles.goToCampaignButton}>
                  <Text style={styles.goToCampaignText}>Update</Text>
                </View>
                <Text style={styles.sectionsText}>
                  {this.props.selectedCampaign.camp_name}
                </Text>
                <TextInput
                  ref={input => {
                    this.campDetailsInput = input;
                  }}
                  returnKeyType='next'
                  placeholder='Write an update here to tell people what has happened since their donation.'
                  style={styles.inputContain2}
                  onChangeText={text => this.setState({ update_desc: text })}
                  multiline={true}
                  value={this.state.update_desc}
                />
              </View>
            </View>
          </ScrollView>
        </KeyboardAwareScrollView>
      </KeyboardAvoidingView>
    );
  }
}
const mapStateToProps = state => ({
  currentUserProfile: state.currentUserProfile,
  selectedCampaign: state.selectedCampaign,
  mediaUpload: state.mediaUpload
});
export default connect(
  mapStateToProps,
  { postCampaignUpdate, getCampaigns, clearMedia }
)(CreateCampUpdateScreen);
const styles = StyleSheet.create({
  sectionContainer: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    margin: 15
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderBottomColor: '#f5f5f5',
    paddingLeft: 10,
    paddingRight: 10,
    height: 75
  },
  TouchableOpacity: {},
  ButtonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#eee',
    marginTop: 12,
    marginBottom: 12,
    flex: 1
  },
  CancelButton: {
    fontSize: 16,
    color: 'black'
  },
  PublishButton: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold'
  },
  camera: {
    backgroundColor: '#C4C4C4',
    width: '100%',
    height: 150,
    flexDirection: 'row'
  },
  CameraContainerButton: {
    marginTop: 120,
    marginRight: 10,
    marginLeft: 10
  },
  inputContain2: {
    height: 146,
    borderWidth: 2,
    borderColor: '#C4C4C4',
    padding: 5,
    borderRadius: 5,
    fontSize: 20,
    marginBottom: 25,
    textAlignVertical: 'top'
  },
  Card: {
    marginTop: 20,
    backgroundColor: '#fff',
    width: '100%',
    padding: 25
  },
  cardText: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 25
  },
  cardPara: {
    marginTop: 10,
    textAlign: 'center',
    fontSize: 13
  },
  sectionsText: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 20,
    marginBottom: 5,
    textAlign: 'center'
  },
  goToCampaignButton: {
    backgroundColor: '#00FF9D',
    alignItems: 'center',
    justifyContent: 'center',
    height: 37,
    width: '100%'
  },
  goToCampaignText: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 18
  }
});
