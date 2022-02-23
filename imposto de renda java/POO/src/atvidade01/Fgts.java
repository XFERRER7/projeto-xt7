package atvidade01;

public class Fgts extends Imposto {
 
	
	Funcionario f3 = new Funcionario();
	
	public double caucularFgts(double salarioLiquido) {
		setValor(salarioLiquido * 0.08);
		
		return getValor();
	}
	
}
