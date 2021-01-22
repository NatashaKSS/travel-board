import userSlice, {
  initialState,
  setUserProfile,
  clearUserProfile,
  initializeUserProfileFromMobileIntegration,
  setUserProfileIsLoading,
  setUserProfileHasErrored,
  setUserProfileErrorMessage,
  setDoNotShowSyncMyInfoDialogAgain,
} from '../travelSlice';
import { UserState, MobileIntegrationUserState } from '../travel.types';
import {
  UserProfile,
  DependentProfileState,
} from 'api/shared/GetUserProfile/getUserProfile.fromApi.types';
import { MOCK_GET_USER_PROFILE_RESPONSE } from 'api/shared/GetUserProfile/__test__/getUserProfile.mock';

describe('User Slice Reducer', () => {
  let state: UserState;

  beforeEach(() => {
    state = {
      ...initialState,
      nric: 'SXXXX567A',
      memberIdentifier: 'abs1239sjwek21032193k',
      name: 'Mary',
      contact: '90442222',
      dateOfBirth: '1993-06-25',
      email: 'korshuyen0625@gmail.com',
      postalCode: '680558',
      block: '123A',
      unitNo: '#08-56',
      streetAddress: 'Clementi Avenue 5',
      buildingName: 'Horizon Gardens',
      photo: 'dummy byte string',
      sources: ['NGEMR', 'EPOS'],
      hasConsentedToTermsAndConditions: true,
      isLoading: false,
      hasErrored: false,
      errorMessage: 'An error occurred',
      childrenProfiles: [],
      careRecipientProfiles: [],
      doNotShowSyncMyInfoDialogAgain: true,
    };
  });

  it('should handle initial state', () => {
    const action = {} as any;

    expect(userSlice(initialState, action)).toEqual(initialState);
  });

  it('should return user object when setUserProfile action is used', () => {
    const userParticulars: UserProfile = {
      MemberIdentifier: '31cd612f65899a12dc471e86639624ef',
      Name: 'Mary',
      Nric: 'SXXXX567A',
      DateOfBirth: '1993-06-25',
      Email: 'korshuyen0625@gmail.com',
      UserGuid: 'dummy guid',
      Id: 'dummy id',
      ContactNumber: '90442222',
      PostalCode: '680558',
      Street: 'Clementi Avenue 5',
      BuildingName: 'Horizon Gardens',
      Block: '123A',
      Unit: '#08-56',
      Photo: 'dummy byte string',
      Sources: ['NGEMR', 'EPOS'],
    };
    const hasConsentedToTermsAndConditions = true;
    const childrenProfiles: DependentProfileState[] =
      MOCK_GET_USER_PROFILE_RESPONSE.ChildrenProfiles;
    const careRecipientProfiles: DependentProfileState[] =
      MOCK_GET_USER_PROFILE_RESPONSE.CareRecipientProfiles;
    const state: UserState = {
      ...initialState,
      memberIdentifier: '31cd612f65899a12dc471e86639624ef',
      patientName: 'Mary',
      patientNric: 'SXXXX567A',
      requestorName: 'Mary',
      requestorNric: 'SXXXX567A',
      contact: '90442222',
      dateOfBirth: '1993-06-25',
      email: 'korshuyen0625@gmail.com',
      postalCode: '680558',
      block: '123A',
      unitNo: '#08-56',
      streetAddress: 'Clementi Avenue 5',
      photo: 'dummy byte string',
      sources: ['NGEMR', 'EPOS'],
      buildingName: 'Horizon Gardens',
      hasConsentedToTermsAndConditions: true,
      childrenProfiles: childrenProfiles,
      careRecipientProfiles: careRecipientProfiles,
    };

    expect(
      userSlice(
        initialState,
        setUserProfile({
          ...userParticulars,
          HasConsentedToTermsAndConditions: hasConsentedToTermsAndConditions,
          ChildrenProfiles: childrenProfiles,
          CareRecipientProfiles: careRecipientProfiles,
        })
      )
    ).toEqual(state);
  });

  it('should clear the state when clearUserProfile action is used', () => {
    state.block = '375A';
    state.doNotShowSyncMyInfoDialogAgain = true;

    expect(userSlice(state, clearUserProfile())).toEqual({
      ...initialState,
      doNotShowSyncMyInfoDialogAgain: true,
    });
  });

  it('should initialize user profile from mobile integration input', () => {
    const state: MobileIntegrationUserState = {
      patientMemberIdentifier: '31cd612f65899a12dc471e86639624ef',
      patientName: 'Mary',
      patientNric: 'SXXXX704B',
      requestorName: 'Bob',
      requestorNric: 'SXXXX567D',
      patientDateOfBirth: 'dummyDate',
      patientPhoto: 'dummyPhoto',
      contact: '90442222',
      email: 'asdf@hotmail.com',
      postalCode: '123456',
      block: '1',
      unitNo: '2',
      streetAddress: 'dummyStreet',
      isPatient: false,
      patientSources: ['A'],
      gender: 'Male',
      nationality: 'Singaporean',
      hasConsentedToTermsAndConditions: true,
    };

    const expectedState: UserState = {
      ...initialState,
      memberIdentifier: '31cd612f65899a12dc471e86639624ef',
      patientName: 'Mary',
      patientNric: 'SXXXX704B',
      requestorName: 'Bob',
      requestorNric: 'SXXXX567D',
      dateOfBirth: 'dummyDate',
      photo: 'dummyPhoto',
      contact: '90442222',
      email: 'asdf@hotmail.com',
      postalCode: '123456',
      block: '1',
      unitNo: '2',
      streetAddress: 'dummyStreet',
      buildingName: null,
      isPatient: false,
      sources: ['A'],
      gender: 'Male',
      nationality: 'Singaporean',
      hasConsentedToTermsAndConditions: true,
    };

    expect(userSlice(initialState, initializeUserProfileFromMobileIntegration(state))).toEqual(
      expectedState
    );
  });

  it('should set the property doNotShowSyncMyInfoDialogAgain when setDoNotShowSyncMyInfoDialogAgain action is used', () => {
    const state: UserState = {
      ...initialState,
      doNotShowSyncMyInfoDialogAgain: true,
    };

    expect(userSlice(initialState, setDoNotShowSyncMyInfoDialogAgain(true))).toEqual(state);
  });

  it('should set the property isLoading when setUserProfileIsLoading action is used', () => {
    const state: UserState = {
      ...initialState,
      isLoading: true,
    };

    expect(userSlice(initialState, setUserProfileIsLoading(true))).toEqual(state);
  });

  it('should set the property hasErrored when setUserProfileHasErrored action is used', () => {
    const state: UserState = {
      ...initialState,
      hasErrored: true,
    };

    expect(userSlice(initialState, setUserProfileHasErrored(true))).toEqual(state);
  });

  it('should set the property errorMessage when setUserProfileErrorMessage action is used', () => {
    const state: UserState = {
      ...initialState,
      errorMessage: 'mock error message',
    };

    expect(userSlice(initialState, setUserProfileErrorMessage('mock error message'))).toEqual(
      state
    );
  });
});
