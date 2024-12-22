import styles from './App.module.css';
import React, { useState } from 'react';

export const Calculator = () => {
	// Состояние для хранения чисел и результата
	const [operand1, setOperand1] = useState('');
	const [operand2, setOperand2] = useState('');
	const [operator, setOperator] = useState('');
	const [display, setDisplay] = useState('0');

	// Массив цифр
	const NUMS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

	let operand1String;
	let operand2String;

	// Обработчики кликов на кнопки цифр
	const handleDigitClick = (digit) => {
		if (operator === '') {
			operand1String = operand1 + digit;

			setOperand1(operand1String);
			setDisplay(operand1String);
		} else {
			operand2String = operand2 + digit;

			setOperand2(operand2String);
			setDisplay(display + digit);
		}
	};

	// Обработчики кликов на кнопки операций
	const handleOperationClick = (operation) => {
		setOperator(operation);
		setDisplay(operand1 + operation);
	};

	const handleResetClick = () => {
		setOperand1('');
		setOperand2('');
		setOperator('');
		setDisplay('0');
	};

	const handleEqualsClick = () => {
		if (operator === '' || !operand1 || !operand2) {
			return;
		}

		if (operator === '+') {
			setDisplay(Number(operand1) + Number(operand2));
			setOperand1('');
			setOperand2('');
			setOperator('');
		} else if (operator === '-') {
			setDisplay(Number(operand1) - Number(operand2));
			setOperand1('');
			setOperand2('');
			setOperator('');
		}
	};
	const renderNumLock = () => {
		return NUMS.map((num) => (
			<div
				className={styles.btn}
				key={num}
			>
				<button
					className={styles.digit}
					onClick={() => handleDigitClick(num)}
				>
					{num}
				</button>
			</div>
		));
	};

	return (
		<div className={styles.calculator}>
			<div className={styles.display}>{display}</div>

			<div className={styles.buttons}>{renderNumLock()}</div>

			<div className={styles.buttons}>
				<button
					className={styles.operation}
					onClick={() => handleOperationClick('+')}
				>
					+
				</button>
				<button
					className={styles.operation}
					onClick={() => handleOperationClick('-')}
				>
					-
				</button>
				<button
					className={styles.operation}
					onClick={() => handleEqualsClick('=')}
				>
					=
				</button>
			</div>
			<button
				className={styles.reset}
				onClick={() => handleResetClick()}
			>
				C
			</button>
		</div>
	);
};
