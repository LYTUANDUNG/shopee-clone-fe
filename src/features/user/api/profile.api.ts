export interface UserProfile {
  username: string;
  name: string;
  email: string;
  phone: string;
  gender: 'male' | 'female' | 'other' | '';
  dob: string;
  avatarUrl: string;
}

// Mock initial data
const mockProfile: UserProfile = {
  username: 'shglj0sgub',
  name: '',
  email: 'ly*******@gmail.com',
  phone: '*********04',
  gender: '',
  dob: '**/**/2000',
  avatarUrl: ''
};

export const profileApi = {
  getProfile: async (): Promise<UserProfile> => {
    // Simulate API call
    return new Promise<UserProfile>((resolve) => {
      setTimeout(() => {
        resolve({ ...mockProfile });
      }, 500);
    });
  },

  updateProfile: async (profile: UserProfile, avatarFile?: File): Promise<UserProfile> => {
    // Simulate API call and file upload
    return new Promise<UserProfile>((resolve, reject) => {
      setTimeout(() => {
        // Mock error for demonstration purpose, here we just resolve
        if (profile.name === 'error') {
            reject(new Error('Mock update error'));
        } else {
            const updatedProfile = { ...profile };
            if (avatarFile) {
                updatedProfile.avatarUrl = URL.createObjectURL(avatarFile);
            }
            resolve(updatedProfile);
        }
      }, 800);
    });
  }
};
