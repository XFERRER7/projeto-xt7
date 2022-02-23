package atvidade01;

public class Main {

	public static void main(String[] args) {
		
		Funcionario f = new Funcionario();
		Empresa e = new Empresa();
		Inss i1 = new Inss();
		Irpf ir = new Irpf();
		Fgts fg = new Fgts();
		
		
		double inss;									
		double irpf;
		double fgts;
		
		double salarioLiquido;
		
		
		
		e.setSalarioBruto(2400);
		inss = i1.caucularInss(e.getSalarioBruto());
		System.out.println("INSS = " + inss);
		System.out.println("----------------------------------------");
		irpf = ir.caucularIrpf(e.getSalarioBruto());
		System.out.printf("IRPF = %2f", irpf);
		System.out.println("----------------------------------------");
		fgts = fg.caucularFgts(e.getSalarioBruto());
		System.out.println("FGTS = " + fgts);
		System.out.println("----------------------------------------");
		
		salarioLiquido = (e.getSalarioBruto() - inss) - irpf;
		
		//----------------------------------------
		
		e.pagarSalarioLiquido(salarioLiquido,f);
		System.out.println("Sálario do funcionário: " + f.getSalario());
		System.out.println("Sálario líquido = " + salarioLiquido);
		
	}

}
