function toHTML(owca) {
	return `
	  <tr>
			<td>${owca.name}</td>
			<td>${owca.colors}</td>
			<td>${owca.age}</td>
			<td>${owca.canSweam}</td>
			<td>${owca.isHappy}</td>
			<td>${owca.maxSpeed}</td>
			<td>${owca.numberOfLegs}</td>
	  </tr>
 	`;
}

const tabela = document.querySelector("#owce");
const imię = document.querySelector("#sheep-name");
const kolor = document.querySelector("#sheep-colors");
const wiek = document.querySelector("#sheep-age");
const pot = document.querySelector("#sheep-canSweam");
const szczescie = document.querySelector("#sheep-isHappy");
const predkosc = document.querySelector("#sheep-maxSpeed");
const nogi = document.querySelector("#sheep-numberOfLegs");

function check( owca ){
	const wpisaneImię = imię.value.trim()
	const wpisanyKolor = kolor.value.trim()
	const wpisanyWiek = wiek.value.trim()
	const wpisanaPredkosc = predkosc.value.trim()
	const wpisaneNogi = nogi.value.trim()
	const wpisanyPot = pot.checked;
	const wpisaneSzczescie = szczescie.checked;
	if(wpisaneImię && !(owca.name.startsWith( wpisaneImię ))) return false; 
	if(wpisanyKolor && !(owca.colors.startsWith( wpisanyKolor ))) return false; 
	if(wpisanyWiek && !(owca.age.startsWith( wpisanyWiek ))) return false; 
	if(wpisanaPredkosc && !(owca.maxSpeed.startsWith( wpisanaPredkosc ))) return false; 
	if(wpisaneNogi && owca.numberOfLegs != wpisaneNogi ) return false; 
	return true;
}
function refresh(){
	const przefiltrowane_owce = randomSheeps.filter( check );
	const html_owce = przefiltrowane_owce.map(toHTML);
	tabela.innerHTML = html_owce.join("");
}

refresh();


const szukaj = document.querySelector("#szukaj");
szukaj.addEventListener("click", refresh);
