/** @format */

import ButtonForm from "../ButtonForm";

function Form({styles}) {
	return (
		<form className={styles.contacts_form}>
			<div className={styles.contacts_title}>Остались вопросы </div>
			<div className={styles.form_controll}>
				<label htmlFor="">
					<span className={styles.form_label}>Ваше имя</span>
					<input type="text" placeholder="Имя" />
				</label>
			</div>
			<div className={styles.form_controll}>
				<label htmlFor="">
					<span className={styles.form_label}>Ваш телефон</span>
					<input type="text" placeholder="+7 ___ _______" />
				</label>
			</div>
			<div className={styles.form_controll}>
				<label htmlFor="">
					<span className={styles.form_label}>Ваш комментарий</span>
					<textarea type="text" placeholder="Комментарий" />
				</label>
			</div>
			<ButtonForm styles={styles} />
			<p className={styles.contacts_formDicription}>Нажимая на кнопку "Заказать звонок", я даю согласие на обработку персональных данных.</p>
		</form>
	);
}

export default Form;
