import friendImageOne from 'assets/image/friend-image-one.png';
import friendImageTwo from 'assets/image/friend-image-two.png';
import friendImageThree from 'assets/image/friend-image-three.png';
import friendImageFour from 'assets/image/friend-image-four.png';
import friendImageFive from 'assets/image/friend-image-five.png';
import friendImageSix from 'assets/image/friend-image-six.png';
import { IMember } from 'shared/interface/state';
export const userData = {
	image: 'friendImageOne',
	userName: 'John Doe',
	mobileNo: '1234567890',
	friend: [
		{
			image: 'friendImageTwo',
			name: 'Jane Smith',
			value: 'janeSmith',
			mobileNo: '9876543210'
		},
		{
			image: 'friendImageThree',
			name: 'Emily Johnson',
			value: 'emilyJohnson',
			mobileNo: '9876543210'
		},
		{
			image: 'friendImageFour',
			name: 'David Anderson',
			value: 'davidAnderson',
			mobileNo: '9876543210'
		},
		{
			image: 'friendImageFive',
			name: 'Sarah Thompson',
			value: 'sarahThompson',
			mobileNo: '9876543210'
		},
		{
			image: 'friendImageSix',
			name: 'Michael Wilson',
			value: 'michaelWilson',
			mobileNo: '9876543210'
		},
		{
			image: 'friendImageOne',
			name: 'Olivia Davis',
			value: 'oliviaDavis',
			mobileNo: '9876543210'
		}
	]
};

export const memberMapper: { [key: string]: IMember } = {
	oliviaDavis: {
		name: 'Olivia Davis',
		image: friendImageOne
	},
	emilyJohnson: {
		name: 'Emily Johnson',
		image: friendImageThree
	},
	davidAnderson: {
		name: 'David Anderson',
		image: friendImageFour
	},
	sarahThompson: {
		name: 'Sarah Thompson',
		image: friendImageFive
	},
	janeSmith: {
		name: 'Jane Smith',
		image: friendImageTwo
	},
	michaelWilson: {
		name: 'Michael Wilson',
		image: friendImageSix
	}
};
export const WINDOW_WIDTH = window.innerWidth;
