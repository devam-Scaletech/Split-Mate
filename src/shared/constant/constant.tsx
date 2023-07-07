import friendImageOne from 'assets/image/friend-image-one.png';
import friendImageTwo from 'assets/image/friend-image-two.png';
import friendImageThree from 'assets/image/friend-image-three.png';
import friendImageFour from 'assets/image/friend-image-four.png';
import friendImageFive from 'assets/image/friend-image-five.png';
import friendImageSix from 'assets/image/friend-image-six.png';
export const userData = {
    image: "friendImageOne",
    userName: "John Doe",
    mobileNo: "1234567890",
    friend: [{
        image: "friendImageTwo",
        name: "Jane Smith",
        mobileNo: "9876543210"
    }, {
        image: "friendImageThree",
        name: "Emily Johnson",
        mobileNo: "9876543210"
    }, {
        image: "friendImageFour",
        name: "David Anderson",
        mobileNo: "9876543210"
    }, {
        image: "friendImageFive",
        name: "Sarah Thompson",
        mobileNo: "9876543210"
    }, {
        image: "friendImageSix",
        name: "Michael Wilson",
        mobileNo: "9876543210"
    }, {
        image: "friendImageOne",
        name: "Olivia Davis",
        mobileNo: "9876543210"
    }]
};

export const memberMapper: { [key: string]: string } = {
    'friendImageOne': friendImageOne,
    'friendImageTwo': friendImageTwo,
    'friendImageThree': friendImageThree,
    'friendImageFour': friendImageFour,
    'friendImageFive': friendImageFive,
    'friendImageSix': friendImageSix
};
export const WINDOW_WIDTH = window.innerWidth;