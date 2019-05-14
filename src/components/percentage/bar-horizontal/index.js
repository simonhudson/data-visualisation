'use strict';

import React from 'react';
import css from './css/styles.scss';

const PercentageBarHorizontal = props => {
	
	const { items } = props;
	
	const totalPercentageExceeds100 = () => {
		if (items.length === 1) return item[0].value > 100;
		let total = 0;
		props.items.forEach(item => total = total + item.value);
		return total > 100;
	};
	
	if (!items || !items.length || totalPercentageExceeds100()) return null;
	
	return (
		<div className="percentage-bar percentage-bar--horizontal">
			<div className="percentage-bar__labels">
				{items.map((item, index) => {
					return (
						<div
							className="percentage-bar__label"
							key={`percentage__label--${index}`}
						>
							{item.label}
						</div>
					)
				})}
			</div>
			<div className="percentage-bar__values">
				{items.map((item, index) => {
					return (
						<div
							className={`percentage-bar__value percentage-bar__value--${item.value}`}
							key={`percentage__value--${index}`}
							style={{ width: item.value + '%', backgroundColor: item.colour }}
						>
							{`${item.value}%`}
						</div>
					)
				})}
			</div>
		</div>
	);

};

export default PercentageBarHorizontal;
