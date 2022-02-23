package atvidade01;

public class Empresa {

	private double salarioBruto;
	
	
	
	public double getSalarioBruto() {
		return salarioBruto;
	}



	public void setSalarioBruto(double salarioBruto) {
		this.salarioBruto = salarioBruto;
	}



	public void pagarSalarioLiquido(double salarioLiquido,Funcionario f1) {
		
		f1.setSalario(salarioLiquido);
		
	}
}
