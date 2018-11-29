using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Funciones
{
    public class Utilidades
    {
        public decimal separaRut(string rutDv)
        {
            rutDv = rutDv.Replace(".", "");
            rutDv = rutDv.Replace("-", "");
            rutDv = rutDv.Substring(0, rutDv.Length - 1);
            return Convert.ToDecimal(rutDv);
        }

        public string separaDv(string rutDv)
        {
            rutDv = rutDv.Replace(".", "");
            rutDv = rutDv.Replace("-", "");
            rutDv = rutDv.Substring(rutDv.Length - 1);
            return rutDv;
        }
    }
}
