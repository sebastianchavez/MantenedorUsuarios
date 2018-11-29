using System;
using System.Collections.Generic;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class finsession : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        if (Session["error"] != null )
        {
            lbl_msgerror.Text = Session["error"].ToString();
        }
        if (Session["aplicacion"] != null)
        {
            Lbl_nombreapp.Text = Session["aplicacion"].ToString();
        }

        Session.Clear();
        Session.Abandon();
    }
}