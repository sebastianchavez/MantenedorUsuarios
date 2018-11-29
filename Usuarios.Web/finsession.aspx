<%@ Page Language="C#" AutoEventWireup="true" CodeFile="finsession.aspx.cs" Inherits="finsession" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml" >
<head runat="server">
<style type="text/css">
.titulomensaje{
   font-size: large;
   font-family: Arial;
   text-shadow: #42487D;
   text-decoration: none;
   font-weight: bold;
   color: #3D3F58;
}

body {
/*color:#555;
	font-family:Verdana,"BitStream vera Sans",Tahoma,Helvetica,Sans-serif;
	font-size:10px;*/
  FONT-FAMILY: Arial, Verdana, Helvetica, sans-serif;
  COLOR: #4b4b4b;
  FONT-SIZE: 0.75em;
  margin: 0;
  height: 100%;
/*font-family: Century Gothic,Arial, Verdana, Helvetica, sans-serif;*/
}

h1, h2, h3, h4, h5, h6 {
  font-weight: bold;
  letter-spacing: -0.05em;
  font-family: Arial;
}

</style>

    <title>Fin sessión</title>
</head>
<body>
    <form id="form1" runat="server">
    <div>
        <asp:Panel ID="Panel1" runat="server" BackColor="White" Height="100%" HorizontalAlign="Center"
            Wrap="False" Width="100%">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <img height="128" src="logocaja256.png" /><br />
            <br />
            <br />
            <asp:Label ID="Lbl_nombreapp" runat="server" Width="700px"></asp:Label><br />
            <br />
            <asp:Label ID="Label1" runat="server" CssClass="titulomensaje" Text="Sessión Terminada"></asp:Label><br />
            <br />
            <asp:Label ID="lbl_msgerror" runat="server" Width="700px"></asp:Label><br />
            <br />
            <%--<asp:Label ID="Label2" runat="server" Text="Ingrese nuevamente desde el menú <b>aplicaciones</b> <br> del Portal de Aplicaciones"></asp:Label><br />--%>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </asp:Panel>
    
    </div>
    </form>
</body>
</html>
