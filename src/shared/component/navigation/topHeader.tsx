import { useCallback, useEffect, useState } from 'react';
import { WINDOW_WIDTH } from 'shared/constant/constant';
import friendImageOne from 'assets/image/friend-image-one.png';

export const TopHeader = () => {
	const [windowWidth, setWindowWidth] = useState(WINDOW_WIDTH);

	const handleResize = useCallback(() => {
		setWindowWidth(window.innerWidth);
	}, []);

	useEffect(() => {
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<div className={`flex width--full justify__content--between mt--30 ${windowWidth <= 350 ?
			'flex--column align__items--center' : ''}`}>
			<p className={`font-size--30 font-family--bold ${windowWidth <= 350 ? '' : 'ml--35'} `}>
				Split Mate
			</p>
			<img src={friendImageOne} alt="Olivia Davis" className={`${windowWidth <= 350 ? 'd-none' : 'width--75-px mr--40 d-block'}`} />

			{windowWidth <= 350 && <div className='flex align__items--center user-profile--wrapper'><img src={friendImageOne} alt="Olivia Davis" className='width--50-px mr--10' />
				<p className='font-family--bold font-size--18'>Olivia Davis</p>
			</div>}
		</div>
	);
};
