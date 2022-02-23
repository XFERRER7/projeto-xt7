package atvidade01;

public class Inss extends Imposto {
	
	
	public double caucularInss(double salario) {
	
	if(salario <= 1317.07) {
		setAliquota(0.08);
    	setValor(salario * getAliquota());
	}
	
	else if(salario > 1317.07 && salario <= 2195.12 ) {
		setAliquota(0.09);
    	setValor(salario * getAliquota());
	}

	else if(salario > 2195.12 && salario <= 4390.24) {
		setAliquota(0.11);
    	setValor(salario * getAliquota());
	}
	
	else if(salario > 4390.24) {
    	setValor(482.93);
	
	}
	
	return getValor();
	
	}
	
}
