function getTraducion(tag)
{

var tags = new Array();
var idioma = document.getElementById('idioma').value;
tags['cat'+'Address']='Escriu la teva adreça';
tags['chn'+'Address']='请提供此联系地址所在的国家或地区';
tags['den'+'Address']='Indsæt dit addresse';
tags['eng'+'Address']='Insert your address';
tags['fin'+'Address']='Osoite';
tags['fra'+'Address']='Veuillez insérer votre adresse';
tags['ger'+'Address']='Bitte geben Sie hier Ihre Anschrift ein';
tags['grk'+'Address']='Εισάγετε τη διεύθυνσή σας';
tags['ita'+'Address']='Inserisci il tuo indirizzo';
tags['jpn'+'Address']='お客様のご住所の最初のラインをご記入ください';
tags['kor'+'Address']='주소';
tags['ned'+'Address']='Adres vereist';
tags['nor'+'Address']='Skriv inn adresse ';
tags['pln'+'Address']='Proszę wpisać Swój adres';
tags['por'+'Address']='Por favor escreva a sua morada';
tags['rus'+'Address']='Укажите свой адрес';
tags['spa'+'Address']='Inserta tu dirección';
tags['swe'+'Address']='Infoga din adress';
tags['cat'+'alerta_campos']='Faltan rellenar campos';
tags['chn'+'alerta_campos']='Faltan rellenar campos';
tags['den'+'alerta_campos']='Faltan rellenar campos';
tags['eng'+'alerta_campos']='Please fill the missing fields';
tags['fin'+'alerta_campos']='Faltan rellenar campos';
tags['fra'+'alerta_campos']='Faltan rellenar campos';
tags['ger'+'alerta_campos']='Faltan rellenar campos';
tags['grk'+'alerta_campos']='Faltan rellenar campos';
tags['ita'+'alerta_campos']='Faltan rellenar campos';
tags['jpn'+'alerta_campos']='Faltan rellenar campos';
tags['kor'+'alerta_campos']='Faltan rellenar campos';
tags['ned'+'alerta_campos']='Faltan rellenar campos';
tags['nor'+'alerta_campos']='Faltan rellenar campos';
tags['pln'+'alerta_campos']='Faltan rellenar campos';
tags['por'+'alerta_campos']='Faltan rellenar campos';
tags['rus'+'alerta_campos']='Faltan rellenar campos';
tags['spa'+'alerta_campos']='Faltan rellenar campos';
tags['swe'+'alerta_campos']='Faltan rellenar campos';
tags['cat'+'City']='Escriu la teva ciutat';
tags['chn'+'City']='请提供您的城市';
tags['den'+'City']='Indsæt dit by';
tags['eng'+'City']='Insert your city';
tags['fin'+'City']='Kaupunki';
tags['fra'+'City']='Veuillez insérer votre ville';
tags['ger'+'City']='Bitte geben Sie hier Ihre Stadt ein';
tags['grk'+'City']='Εισάγετε την πόλη σας';
tags['ita'+'City']='Inserisci la tua cittá';
tags['jpn'+'City']='あなたの街に記入してください';
tags['kor'+'City']='도시';
tags['ned'+'City']='Woonplaats vereist';
tags['nor'+'City']='Skriv inn by';
tags['pln'+'City']='Proszę wpisać miasto';
tags['por'+'City']='Por favor escreva a sua cidade';
tags['rus'+'City']='Укажите свой город';
tags['spa'+'City']='Inserta tu ciudad';
tags['swe'+'City']='Infoga din stad';
tags['cat'+'Country']='Escriu el teu país';
tags['chn'+'Country']='请提供您的国家';
tags['den'+'Country']='Indsæt dit land';
tags['eng'+'Country']='Insert your country';
tags['fin'+'Country']='Maa';
tags['fra'+'Country']='Veuillez insérer votre pays';
tags['ger'+'Country']='Bitte geben Sie hier Ihr Land ein';
tags['grk'+'Country']='Εισάγετε τη χώρα σας';
tags['ita'+'Country']='Inserisci la tua Nazione';
tags['jpn'+'Country']='あなたの国を記入してください';
tags['kor'+'Country']='국가';
tags['ned'+'Country']='Land vereist';
tags['nor'+'Country']='Skriv inn land';
tags['pln'+'Country']='Proszę wpisać Swój Kraj ';
tags['por'+'Country']='Por favor escreva o seu pais';
tags['rus'+'Country']='Укажите свою страну';
tags['spa'+'Country']='Inserta tu país';
tags['swe'+'Country']='Infoga din land';
tags['cat'+'Email']='Escriu el correu electrònic';
tags['chn'+'Email']='请输入您的电子邮箱地址';
tags['den'+'Email']='Indsæt dit e-mail';
tags['eng'+'Email']='Insert your e-mail';
tags['fin'+'Email']='Sähköpostiosoite';
tags['fra'+'Email']='Veuillez insérer votre e-mail';
tags['ger'+'Email']='Bitte geben Sie hier Ihre E-Mail-Adresse ein';
tags['grk'+'Email']='Εισάγετε το e-mail';
tags['ita'+'Email']='Inserisci la tua E-mail';
tags['jpn'+'Email']='お客様のメールアドレスをご記入ください';
tags['kor'+'Email']='이메일';
tags['ned'+'Email']='E-mailadres vereist';
tags['nor'+'Email']='Skriv inn e-mail';
tags['pln'+'Email']='Proszę wpisać Swój Email';
tags['por'+'Email']='Por favor escreva o seu e-mail';
tags['rus'+'Email']='Введите свой e-mail';
tags['spa'+'Email']='Inserta tu correo electrónico';
tags['swe'+'Email']='Infoga din e-mail adress';
tags['cat'+'enviar_a']='Enviar a:';
tags['chn'+'enviar_a']='运送至:';
tags['den'+'enviar_a']='Forsendelse til:';
tags['eng'+'enviar_a']='Shipping to:';
tags['fin'+'enviar_a']='Lähetetään osoitteeseen:';
tags['fra'+'enviar_a']='Livraison en:';
tags['ger'+'enviar_a']='Versand nach:';
tags['grk'+'enviar_a']='Αποστολή σε:';
tags['ita'+'enviar_a']='Invio per:';
tags['jpn'+'enviar_a']='お届け先国名:';
tags['kor'+'enviar_a']='배송지:';
tags['ned'+'enviar_a']='Verzenden:';
tags['nor'+'enviar_a']='Frakt til:';
tags['pln'+'enviar_a']='Wysyłka do:';
tags['por'+'enviar_a']='Enviar para:';
tags['rus'+'enviar_a']='Доставить в:';
tags['spa'+'enviar_a']='Enviar a:';
tags['swe'+'enviar_a']='Frakt till:';
tags['cat'+'error']='Atenció!';
tags['chn'+'error']='请在继续前修正下列错误 ';
tags['den'+'error']='Error!';
tags['eng'+'error']='Please correct the following errors:';
tags['fin'+'error']='Virhe!';
tags['fra'+'error']='Veuillez corriger les erreurs suivantes:';
tags['ger'+'error']='Fehler!';
tags['grk'+'error']='Σφάλμα!';
tags['ita'+'error']='Errore!';
tags['jpn'+'error']='続行する前に、次のエラーを修正してください';
tags['kor'+'error']='오류!';
tags['ned'+'error']='Error!';
tags['nor'+'error']='Error!';
tags['pln'+'error']='Błąd!';
tags['por'+'error']='Atenção!';
tags['rus'+'error']='Пожалуйста, исправьте следующие ошибки:';
tags['spa'+'error']='¡Atención!';
tags['swe'+'error']='Error!';
tags['cat'+'First_name']='Escriu el teu nom';
tags['chn'+'First_name']='请输入您的名';
tags['den'+'First_name']='Indsæt dit navn';
tags['eng'+'First_name']='Insert your first name';
tags['fin'+'First_name']='Etunimi';
tags['fra'+'First_name']='Veuillez insérer votre nom ';
tags['ger'+'First_name']='Bitte geben Sie hier Ihren Vornamen ein';
tags['grk'+'First_name']='Εισάγετε το όνομά σας';
tags['ita'+'First_name']='Inserisci il tuo nome';
tags['jpn'+'First_name']='お客様のお名前（ファーストネーム）を入力してください';
tags['kor'+'First_name']='(성이 아닌) 이름';
tags['ned'+'First_name']='Voornaam vereist';
tags['nor'+'First_name']='Skriv inn fornavn';
tags['pln'+'First_name']='Proszę wpisać Swoje imię';
tags['por'+'First_name']='Por favor escreva o seu nome';
tags['rus'+'First_name']='Укажите свое имя';
tags['spa'+'First_name']='Inserta tu nombre';
tags['swe'+'First_name']='Infoga ditt förnamn';
tags['cat'+'incorrect_email']='Aquest correu no és idèntic';
tags['chn'+'incorrect_email']='重复邮箱';
tags['den'+'incorrect_email']='Den e-mail er ikke den samme';
tags['eng'+'incorrect_email']='This e-mail is not the same';
tags['fin'+'incorrect_email']='Sähköpostiosoite ei ole sama';
tags['fra'+'incorrect_email']='Veuillez confirmer à nouveau votre e-mail';
tags['ger'+'incorrect_email']='Die angegebene E-Mail-Adresse ist nicht korrekt';
tags['grk'+'incorrect_email']='Το email δεν είναι το ίδιο';
tags['ita'+'incorrect_email']='L`indirizzo E-mail non è lo stesso';
tags['jpn'+'incorrect_email']='メール有効ではありません';
tags['kor'+'incorrect_email']='올바른 이메일 주소를 반복하여 주십시오';
tags['ned'+'incorrect_email']='Herhaal e-mailadres ';
tags['nor'+'incorrect_email']='E-mail er ikke det samme';
tags['pln'+'incorrect_email']='Adres e-mail nie jest taki sam';
tags['por'+'incorrect_email']='Por favor, confirme de novo o seu e-mail';
tags['rus'+'incorrect_email']='E-mail не совпадают';
tags['spa'+'incorrect_email']='Este correo electrónico no es el mismo';
tags['swe'+'incorrect_email']='E-mail adressen är inte densamma';
tags['cat'+'invalid_email']='Aquest correu electrònic no és vàlid';
tags['chn'+'invalid_email']='电子邮件地址是不正确的';
tags['den'+'invalid_email']='E-Mail er ikke gyldig';
tags['eng'+'invalid_email']='This e-mail is not valid';
tags['fin'+'invalid_email']='Sähköpostiosoite ei ole voimassa';
tags['fra'+'invalid_email']='Cet e-mail n´est pas valide';
tags['ger'+'invalid_email']='Die angegebene E-Mail-Adresse ist nicht korrekt';
tags['grk'+'invalid_email']='Το E-Mail δεν είναι έγκυρο';
tags['ita'+'invalid_email']='E-Mail non è valida';
tags['jpn'+'invalid_email']='メール有効ではありません';
tags['kor'+'invalid_email']='이메일 유효하지 않음';
tags['ned'+'invalid_email']='E-mailadres niet geldig';
tags['nor'+'invalid_email']='E-Mail ikke gyldig';
tags['pln'+'invalid_email']='E-Mail nieprawidłowy';
tags['por'+'invalid_email']='O seu email não é válido';
tags['rus'+'invalid_email']='This e-mail is not valid';
tags['spa'+'invalid_email']='Este correo electrónico no es válido';
tags['swe'+'invalid_email']='Ogiltig e-mail adress';
tags['cat'+'invalid_email2']='Aquest correu no és vàlid';
tags['chn'+'invalid_email2']='电子邮件地址是不正确的';
tags['den'+'invalid_email2']='E-Mail er ikke gyldig';
tags['eng'+'invalid_email2']='This e-mail is not valid';
tags['fin'+'invalid_email2']='Sähköpostiosoite ei ole kirjoitettu oikein.';
tags['fra'+'invalid_email2']='Cet e-mail n´est pas valide';
tags['ger'+'invalid_email2']='Die angegebene E-Mail-Adresse ist nicht korrekt';
tags['grk'+'invalid_email2']='Η διεύθυνση ηλεκτρονικού ταχυδρομείου δεν είναι σω';
tags['ita'+'invalid_email2']='L´indirizzo e-mail non è corretto';
tags['jpn'+'invalid_email2']='重复邮箱';
tags['kor'+'invalid_email2']='이메일 주소가 유효하지 않습니다';
tags['ned'+'invalid_email2']='E-mailadres niet geldig';
tags['nor'+'invalid_email2']='E-Mail ikke gyldig';
tags['pln'+'invalid_email2']='E-Mail nie jest prawidłowy';
tags['por'+'invalid_email2']='O seu email não é válido';
tags['rus'+'invalid_email2']='Неверный e-mail';
tags['spa'+'invalid_email2']='Este correo electrónico no es válido';
tags['swe'+'invalid_email2']='Felaktig e-mail adress';
tags['cat'+'Last_name']='Escriu els teus cognoms';
tags['chn'+'Last_name']='请输入您的姓';
tags['den'+'Last_name']='Indsæt dit efternavn';
tags['eng'+'Last_name']='Insert your last name';
tags['fin'+'Last_name']='Sukunimi';
tags['fra'+'Last_name']='Veuillez insérer votre prénom';
tags['ger'+'Last_name']='Bitte geben Sie hier Ihren Nachnamen ein';
tags['grk'+'Last_name']='Εισάγετε το επώνυμό σας';
tags['ita'+'Last_name']='Inserisci il tuo cognome';
tags['jpn'+'Last_name']='お客様の姓を入力してください';
tags['kor'+'Last_name']='(성) 이름';
tags['ned'+'Last_name']='Achternaam vereist';
tags['nor'+'Last_name']='Skriv inn etternavn';
tags['pln'+'Last_name']='Proszę wpisać Swoje nazwisko';
tags['por'+'Last_name']='Por favor escreva o seu apelido';
tags['rus'+'Last_name']='Укажите свою фамилию';
tags['spa'+'Last_name']='Inserta tus apellidos';
tags['swe'+'Last_name']='Infoga ditt efternamn';
tags['cat'+'Phone']='Escriu el telèfon';
tags['chn'+'Phone']='请提供一个联系电话';
tags['den'+'Phone']='Indsæt dit telefon';
tags['eng'+'Phone']='Insert your phone';
tags['fin'+'Phone']='Puhelin';
tags['fra'+'Phone']='Veuillez insérer votre numéro de téléphone';
tags['ger'+'Phone']='Bitte geben Sie hier Ihre Telefonnummer ein';
tags['grk'+'Phone']='Τοποθετήστε το τηλέφωνό σας';
tags['ita'+'Phone']='Inserisci il tuo telefono';
tags['jpn'+'Phone']='お電話番号をご記入ください';
tags['kor'+'Phone']='전화 번호';
tags['ned'+'Phone']='Telefoonnummer vereist';
tags['nor'+'Phone']='Skriv inn phone';
tags['pln'+'Phone']='Proszę wpisać Swój telefon';
tags['por'+'Phone']='Por favor escreva o seu telefone';
tags['rus'+'Phone']='Укажите свой номер телефона';
tags['spa'+'Phone']='Inserta tu número de teléfono';
tags['swe'+'Phone']='Infoga ditt telefonnummer';
tags['cat'+'Politica_Privacidad']='Accepta la política de privacitat';
tags['chn'+'Politica_Privacidad']='请接受我们的隐私政策';
tags['den'+'Politica_Privacidad']='Du skal acceptere vores politik om personlige oply';
tags['eng'+'Politica_Privacidad']='You need to accept our privacy policy';
tags['fin'+'Politica_Privacidad']='Sinun täytyy hyväksyä Käyttöehtomme';
tags['fra'+'Politica_Privacidad']='Veuillez accepter nos conditions générales';
tags['ger'+'Politica_Privacidad']='Bitte akzeptieren Sie unsere AGB.';
tags['grk'+'Politica_Privacidad']='Θα πρέπει να αποδεχθείτε τους Όρους και τις Προϋπο';
tags['ita'+'Politica_Privacidad']='Devi accettare la nostra Politica di Privacy';
tags['jpn'+'Politica_Privacidad']='当社のプライバシーポリシーを受け入れてください';
tags['kor'+'Politica_Privacidad']='이용약관에 동의해 주십시오';
tags['ned'+'Politica_Privacidad']='Je nodig hebt om ons privacy policy te aanvaarden';
tags['nor'+'Politica_Privacidad']='Du må akseptere våre Personlige Betingelser';
tags['pln'+'Politica_Privacidad']='Musisz zaakceptować naszą politykę prywatności';
tags['por'+'Politica_Privacidad']='Por favor aceite a política de privacidade';
tags['rus'+'Politica_Privacidad']='Примите нашу Политику Конфиденциальности';
tags['spa'+'Politica_Privacidad']='Debes aceptar nuestra política de privacidad';
tags['swe'+'Politica_Privacidad']='Du måste acceptera användarvillkoren';
tags['cat'+'Post_Code']='Escriu el codi postal';
tags['chn'+'Post_Code']='请提供一个有效的邮政编码';
tags['den'+'Post_Code']='Indsæt dit postnummer';
tags['eng'+'Post_Code']='Insert your post code';
tags['fin'+'Post_Code']='Postinumero';
tags['fra'+'Post_Code']='Veuillez insérer votre code postal';
tags['ger'+'Post_Code']='Bitte geben Sie hier Ihre Postleitzahl ein';
tags['grk'+'Post_Code']='Εισάγετε τον ταχυδρομικό κώδικα σας';
tags['ita'+'Post_Code']='Inserisci il codice postale';
tags['jpn'+'Post_Code']='有効な郵便番号をご記入ください';
tags['kor'+'Post_Code']='우편 번호';
tags['ned'+'Post_Code']='Postcode vereist';
tags['nor'+'Post_Code']='Skriv inn post kode';
tags['pln'+'Post_Code']='Proszę wpisać Swój kod pocztowy ';
tags['por'+'Post_Code']='Por favor escreva o seu código postal';
tags['rus'+'Post_Code']='Укажите почтовый индекс';
tags['spa'+'Post_Code']='Inserta tu código postal';
tags['swe'+'Post_Code']='Infoga ditt postnummer';
tags['cat'+'PostNumber']='Introdueix el teu codi postal';
tags['chn'+'PostNumber']='请提供一个有效的邮政编码';
tags['den'+'PostNumber']='Please enter your Post Number';
tags['eng'+'PostNumber']='Please enter your Post Number';
tags['fin'+'PostNumber']='Please enter your Post Number';
tags['fra'+'PostNumber']='Veuillez insérer votre Post Number';
tags['ger'+'PostNumber']='Bitte geben Sie Ihre Postnummer ein';
tags['grk'+'PostNumber']='Παρακαλούμε, εισάγετε Δημοσίευση Αριθμό σας';
tags['ita'+'PostNumber']='Inserisci il Post Number';
tags['jpn'+'PostNumber']='Please enter your Post Number';
tags['kor'+'PostNumber']='Please enter your Post Number';
tags['ned'+'PostNumber']='Please enter your Post Number';
tags['nor'+'PostNumber']='Please enter your Post Number';
tags['pln'+'PostNumber']='Proszę wpisać Swój Post Number';
tags['por'+'PostNumber']='Por favor escreva o seu Post Number';
tags['rus'+'PostNumber']='Пожалуйста, введите Ваш почтовый номер';
tags['rus'+'PostNumber']='Пожалуйста, введите Ваш почтовый номер';
tags['spa'+'PostNumber']='Introduce tu código postal';
tags['swe'+'PostNumber']='Infoga ditt Post Number';
tags['cat'+'Repeat_Email']='Repeteix el correu electrònic';
tags['chn'+'Repeat_Email']='重复邮箱';
tags['den'+'Repeat_Email']='Gentag e-mail adresse';
tags['eng'+'Repeat_Email']='Repeat your e-mail';
tags['fin'+'Repeat_Email']='Toista sähköpostiosoite';
tags['fra'+'Repeat_Email']='Veuillez confirmer votre e-mail ';
tags['ger'+'Repeat_Email']='Bitte geben Sie hier Ihre E-Mail-Adresse ein';
tags['grk'+'Repeat_Email']='Επαναλάβετε Email';
tags['ita'+'Repeat_Email']='Ripeti la tua E-mail';
tags['jpn'+'Repeat_Email']='重复邮箱';
tags['kor'+'Repeat_Email']='이메일 반복';
tags['ned'+'Repeat_Email']='Herhaal e-mailadres ';
tags['nor'+'Repeat_Email']='Gjenta e-mail';
tags['pln'+'Repeat_Email']='Powtórzyć adres e-mail ';
tags['por'+'Repeat_Email']='Por favor repita o seu e-mail';
tags['rus'+'Repeat_Email']='Повторите свой e-mail';
tags['spa'+'Repeat_Email']='Repite tu correo electrónico ';
tags['swe'+'Repeat_Email']='Upprepa e-mail';
tags['cat'+'required']='Obligatori';
tags['chn'+'required']='必要 ';
tags['den'+'required']='required';
tags['eng'+'required']='required';
tags['fin'+'required']='required';
tags['fra'+'required']='Obligatoire';
tags['ger'+'required']='Pflichtfeld';
tags['grk'+'required']='υποχρεούμαι ';
tags['ita'+'required']='richiesto';
tags['jpn'+'required']='required';
tags['kor'+'required']='required';
tags['ned'+'required']='required';
tags['nor'+'required']='required';
tags['pln'+'required']='wymagany';
tags['por'+'required']='necessário';
tags['rus'+'required']='обязательно';
tags['spa'+'required']='Obligatorio';
tags['swe'+'required']='nödvändig';
tags['cat'+'State_Province']='Escriu la província';
tags['chn'+'State_Province']='请提供您的州/省';
tags['den'+'State_Province']='Indsæt dit stat / provins';
tags['eng'+'State_Province']='Insert your state / province';
tags['fin'+'State_Province']='Valtio/Lääni';
tags['fra'+'State_Province']='Veuillez insérer votre département';
tags['ger'+'State_Province']='Bitte geben Sie hier Ihr Bundesland ein';
tags['grk'+'State_Province']='Εισάγετε πολιτεία / επαρχία σας';
tags['ita'+'State_Province']='Inserisci la tua Provincia';
tags['jpn'+'State_Province']='あなたの州/県に記入してください';
tags['kor'+'State_Province']='주 / 지방';
tags['ned'+'State_Province']='Staat / Provincie vereist';
tags['nor'+'State_Province']='Skriv inn komune / område';
tags['pln'+'State_Province']='Proszę wpisać Swoje Województwo ';
tags['por'+'State_Province']='Por favor escreva o seu distrito';
tags['rus'+'State_Province']='Укажите свою область / край';
tags['spa'+'State_Province']='Inserta tu provincia ';
tags['swe'+'State_Province']='Infoga ditt Postort';
tags['cat'+'terms_conditions']='Accepta els Termes i Condicions';
tags['chn'+'terms_conditions']='请接受我们的条款和条件';
tags['den'+'terms_conditions']='Du skal acceptere vores vilkår og betingelser!';
tags['eng'+'terms_conditions']='You need to accept our terms and conditions';
tags['fin'+'terms_conditions']='Sinun täytyy hyväksyä Käyttöehtomme';
tags['fra'+'terms_conditions']='Veuillez accepter nos conditions générales';
tags['ger'+'terms_conditions']='Bitte akzeptieren Sie unsere AGB.';
tags['grk'+'terms_conditions']='Θα πρέπει να αποδεχθείτε τους Όρους και τις Προϋπο';
tags['ita'+'terms_conditions']='Devi accettare la nostra i Termini e Condizioni';
tags['jpn'+'terms_conditions']='私たちの条件を受け入れてください';
tags['kor'+'terms_conditions']='이용약관에 동의해 주십시오';
tags['ned'+'terms_conditions']='Je moet onze Algemene condities accepteren';
tags['nor'+'terms_conditions']='Du må akseptere våre Vilkår og Betingelser';
tags['pln'+'terms_conditions']='Musisz zaakceptować ogólne warunki';
tags['por'+'terms_conditions']='Por favor aceite os termos e condições';
tags['rus'+'terms_conditions']='Необходимо принять наши правила и условия';
tags['spa'+'terms_conditions']='Debes aceptar nuestros términos y condiciones';
tags['swe'+'terms_conditions']='Du måste acceptera användarvillkoren';
return  tags[idioma+tag];
}