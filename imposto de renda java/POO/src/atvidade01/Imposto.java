package atvidade01;

public abstract class Imposto {
	
	private double valor;
	private double aliquota;
	
	public void caucularSalario(double inss, double fgts, double irpf) {
		
	}

	public double getAliquota() {
		return aliquota;
	}

	public void setAliquota(double aliquota) {
		this.aliquota = aliquota;
	}

	public double getValor() {
		return valor;
	}

	public void setValor(double valor) {
		this.valor = valor;
	}

}
