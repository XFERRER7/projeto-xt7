package atvidade01;

public class Irpf extends Imposto {

	
	Funcionario f2 = new Funcionario();
	
	
	public double caucularIrpf(double salario) {
	
	
    if(salario <= 1787.77) {
    	setAliquota(1);
    	setValor(salario * getAliquota() - 0.0);
    }
    else if(salario >= 1787.78 && salario <= 2679.29) {
    	setAliquota(7.5/100);
    	setValor(salario * getAliquota() - 134.08);
    }
    else if(salario >= 2679.30 && salario <=  3572.43) {
    	setAliquota(0.15);
    	setValor(salario * getAliquota() - 335.03);
    }
    else if(salario >=  3572.44 && salario <=  4463.81) {
    	setAliquota(0.225);
    	setValor(salario * getAliquota() - 602.96);
    }
    else if(salario > 4463.81) {
    	setAliquota(0.275);
    	setValor(salario * getAliquota() - 826.15);
    }
    
	
    return getValor();
	}
	
	
	
}
