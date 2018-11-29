using System;
using System.Collections.Generic;
using System.Web;

/// <summary>
/// Descripción breve de Respuesta
/// </summary>
public class Respuesta
{

    int _codigo = -1;
    string _mensaje = "Error al ejecutar";
    string _datos = "[]";
    string _datos2 = "[]";
    string _datos3 = "[]";
    string _descrDocumento;

    public string datos3
    {
        get
        {
            return _datos3;
        }

        set
        {
            _datos3 = value;
        }
    }

    public string descrDocumento
    {
        get
        {
            return _descrDocumento;
        }

        set
        {
            _descrDocumento = value;
        }
    }

    public Respuesta()
    {
        //
        // TODO: Agregar aquí la lógica del constructor
        //
    }

    public int codigo
    {
        get
        {
            return _codigo;
        }

        set
        {
            _codigo = value;
        }
    }

    public string mensaje
    {
        get
        {
            return _mensaje;
        }

        set
        {
            _mensaje = value;
        }
    }

    public string datos
    {
        get
        {
            return _datos;
        }

        set
        {
            _datos = value;
        }
    }

    public string datos2
    {
        get
        {
            return _datos2;
        }

        set
        {
            _datos2 = value;
        }
    }
}