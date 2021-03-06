import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  container: {
    marginTop: 200,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  itemContainers: {
    width: '95%',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: 'white',
    marginTop: 10,
    paddingTop: 4,
    paddingBottom: 4,
    borderRadius: 10,
    flexDirection: 'column',
  },
  itemContentBody: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  itemTitleRow: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'stretch',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    paddingBottom: 10,
  },
  itemContentRows: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'stretch',
    marginBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    paddingBottom: 5,
  },
  itemFooterRow: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'stretch',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    paddingBottom: 15,
  },
  itemTitleText: {
    fontSize: 17,
    marginLeft: 7,
    textAlign: 'left',
    fontFamily: 'Lato-Bold',
    alignSelf: 'flex-start',
  },
  chevronArrowContainer: {
    marginLeft: 'auto',
  },
  fullWidthButtonContainer: {
    padding: 15,
    width: '100%',
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 18,
  },
  fullWidthButton: {
    width: '95%',
    flex: 1,
    height: 48,
    backgroundColor: '#31ffa5',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    textAlign: 'center',
    shadowColor: 'rgba(0, 0, 0, 0.15)',
    shadowOffset: {
      height: 4,
    },
    shadowRadius: 5,
    shadowOpacity: 10,
  },
  buttonTextPlusIcon: {
    fontSize: 25,
    width: '15%',
    color: '#30d985',
  },
  mediumButtonText: {
    fontFamily: 'Lato-Bold',
    fontSize: 14,
  },
  responsiveButton: {
    height: 34,
    backgroundColor: '#f2f2f2',
    marginBottom: 4,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 5,
    textAlign: 'center',
    shadowColor: 'rgba(0, 0, 0, 0)',
    shadowOffset: {
      height: 4,
    },
    shadowRadius: 5,
    shadowOpacity: 10,
  },
  skillsContainer: {
    width: 300,
    marginBottom: 10,
    marginLeft: 10,
  },
  skillsButton: {
    height: 34,
    backgroundColor: '#31ffa5',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 5,
    marginRight: 4,
    marginBottom: 4,
    paddingLeft: 15,
    paddingRight: 15,
    textAlign: 'center',
    shadowColor: 'rgba(0, 0, 0, 0)',
    shadowOffset: {
      height: 4,
    },
    shadowRadius: 5,
    shadowOpacity: 10,
  },
  skillsContactContainer: {
    flexDirection: 'row',
  },
  campaignContainer: {
    marginLeft: -8,
  },
  innerCampaignContainer: {
    marginLeft: 20,
  },
  groupContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  applicationContainer: {
    marginBottom: 10,
    marginLeft: -10,
  },
  buttonText: {
    color: '#323339',
    textTransform: 'uppercase',
    fontSize: 17,
    textAlign: 'center',
    fontFamily: 'Lato-Bold',
  },
  reachMeText: {
    fontFamily: 'Lato',
    fontSize: 16,
    color: '#323339',
    width: '80%',
    flexDirection: 'row',
  },
  reachMeSwitch: {
    marginLeft: 'auto',
    alignSelf: 'flex-start',
  },
  avatarImageContainer: {
    alignSelf: 'flex-start',
  },
  campaignRightContainer: {
    width: '78%',
    marginLeft: 'auto',
  },
  campaignOrganizationName: {
    fontSize: 16,
    fontFamily: 'Lato',
    width: '90%',
  },
  campaignRow: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 3,
  },
  campaignRowFooter: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  openTag: {
    height: 34,
    width: 80,
    backgroundColor: 'rgba(202,255,0, 0.7)',
    marginBottom: 4,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 20,
    textAlign: 'center',
    shadowColor: 'rgba(0, 0, 0, 0)',
    shadowOffset: {
      height: 4,
    },
    shadowRadius: 5,
    shadowOpacity: 10,
  },
  closeTag: {
    height: 34,
    width: 80,
    backgroundColor: '#E31059',
    marginBottom: 4,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 20,
    textAlign: 'center',
    shadowColor: 'rgba(0, 0, 0, 0)',
    shadowOffset: {
      height: 4,
    },
    shadowRadius: 5,
    shadowOpacity: 10,
  },
  closeText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  intervalPostedText: {
    color: '#b6b9bc',
    fontSize: 12,
  },
  description: {
    width: '100%',
    justifyContent: 'flex-end',
    fontSize: 14,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  skillGroupElement: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    width: '50%',
  },
  skillGroupTitle: {
    fontSize: 16,
    marginTop: 10,
  },
  skillGroupName: {
    fontSize: 16,
  },
  skillGroupDescription: {
    width: '100%',
    justifyContent: 'flex-end',
    fontSize: 14,
    paddingLeft: 5,
  },
});
