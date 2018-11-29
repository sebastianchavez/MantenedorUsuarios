<%@ Page Title="" Language="C#" MasterPageFile="~/Site.master" AutoEventWireup="true" CodeFile="Users.aspx.cs" Inherits="Users" %>

<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" Runat="Server">

    <div class="row">
        <div class="col-md-12">
            <div class="alert alert-success" align="center">
              <strong>Servipag Buin Zoo</strong>
            </div>
        </div>
        <div class="col-md-4"></div>
        <div class="col-md-4">
            <button class="btn btn-info btn-block" onclick="openModal('new');">Agregar usuario</button>
        </div>
        <div class="col-md-4">
            <%--<button class="btn btn-danger btn-block">Eliminar usuario</button>--%>
        </div>
    </div>
    <br />
    
            <div class="table-responsive">
                <table class="table table-bordered" tabla="tableUsers" width="100%" cellspacing="0">
                    <thead>
                        <tr>
                            <th data-field="usr_nombre">Nombre</th>
                            <th data-field="usr_apellido">Apellido</th>
                            <th data-field="usr_email">Correo</th>
                            <th data-field="usr_cuenta">Usuario</th>
                            <th data-field="btnEdit">Editar</th>
                            <th data-field="btnDel">Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                    <tfoot>
                    </tfoot>
                </table>
            </div>

     <!-- Modal usuarios -->
  <div class="modal fade" id="modalUsers">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
      
        <!-- Modal Header -->
        <div class="modal-header">
          <h4 class="modal-title" id="txtUsuario">Usuarios</h4>
          <button type="button" class="close" data-dismiss="modal">×</button>
        </div>
        
        <!-- Modal body -->
        <div class="modal-body">
            <div class="row">
                <div class="col-md-6">
                    <label>Cuenta de usuario</label>
                    <input class="form-control" type="text" name="usr_cuenta" value="" id="usr_cuenta" required />
                    <br />
                    <p class="bg-secondary text-white">Datos usuario</p>
                    <label>Rut</label>
                    <input class="form-control" type="text" name="usr_rut" onblur="validarut(this,1)" id="usr_rut" value="" required />
                    <label>Nombre</label>
                    <input class="form-control" type="text" name="usr_nombre" value="" id="usr_nombre" required />
                    <label>Apellido</label>
                    <input class="form-control" type="text" name="usr_apellido" id="usr_apellido" value="" required />
                    <label>Correo</label>
                    <input class="form-control" type="text" name="usr_email" id="usr_email" onblur="val_correo(this)" value="" required />
                    <label>Telefono</label>
                    <input class="form-control" type="text" name="usr_telefono" id="usr_telefono" value="" onkeypress="return solonumeros(this,event);" required />
                    <br />
                    <select class="form-control" id="cbActiv">
                        <option value="1" >Activo</option>
                        <option value="0" >Inactivo</option>
                    </select>
                </div>
                <div class="col-md-6">
                    <label>Contraseña</label>
                    <input class="form-control" type="password" name="usr_pwd" value="" id="usr_pwd" required />
                    <br />
                    <p class="bg-secondary text-white">Datos empresa</p>
                    <label>Rut empresa</label>
                    <input class="form-control" type="text" name="emp_rut" onblur="validarut(this,1)" id="emp_rut" value=""  required/>
                    <label>Razon social</label>
                    <input class="form-control" type="text" name="usr_empresa" id="usr_empresa" value="" required />
                    <label>Direccion</label>
                    <input class="form-control" type="text" name="usr_direccion" id="usr_direccion" value="" required />
                    <label>Ciudad</label>
                    <input class="form-control" type="text" name="emp_ciudad" id="emp_ciudad" value="" required />
                    <label>Telefono</label>
                    <input class="form-control" type="text" name="emp_telefono" id="emp_telefono" onkeypress="return solonumeros(this,event);" value="" required />
                    <label>Region</label>
                    <input class="form-control" type="text" name="emp_region" id="emp_region" value="" required />
                </div>
            </div>
        </div>
        
        <!-- Modal footer -->
        <div class="modal-footer">
          <button type="button" class="btn btn-success" onclick="guardar();">Guardar</button>
          <button type="button" class="btn btn-danger" data-dismiss="modal" id="cerrarPopoup">Cerrar</button>
        </div>
        
      </div>
    </div>
  </div>
     
    <script>


        //abrir modal
        function openModal(usr) {
            var data = {
            }; 
            if (usr == 'new') {
                $('#txtUsuario').html('Nuevo usuario');
                $('#usr_cuenta').removeAttr('disabled');
                $('#usr_rut').removeAttr('disabled');
                $('#usr_rut').val('');
                $('#emp_rut').val('');
            } else {
                var datos = {
                    usr_cuenta : usr,
                    accion : "buscarUsuario"
                };
                var ok;
                $.ajax({
                    type: "POST",
                    url: "Datos.aspx",
                    data: datos,
                    async: false,
                    cache: false,
                    success: function (msg) {
                        var respuesta = JSON.parse(msg).datos;
                        ok = JSON.parse(respuesta);
                    },
                    error: function (msg) {
                        alert('Error:  ' + msg.responseText);
                    }
                });
                $('#txtUsuario').html('Modificar usuario');
                data = ok;
                $('#usr_cuenta').attr('disabled', 'disabled');
                $('#usr_rut').attr('disabled', 'disabled');
                $('#usr_rut').val(data.usr_rut + '-' + data.usr_dv);
                $('#emp_rut').val(data.emp_roluni + '-' + data.emp_dv);
            }
            $('#usr_cuenta').val(data.usr_cuenta);
            $('#usr_pwd').val(data.usr_password);
            $('#usr_nombre').val(data.usr_nombre);
            $('#usr_apellido').val(data.usr_apellido);
            $('#usr_email').val(data.usr_email);
            $('#usr_telefono').val(data.usr_telefono);
            $('#usr_empresa').val(data.usr_empresa);
            $('#usr_direccion').val(data.usr_direccion);
            $('#emp_ciudad').val(data.emp_ciudad);
            $('#emp_telefono').val(data.emp_telefono);
            $('#emp_region').val(data.emp_region);
            $("#modalUsers").modal();
        } //fin openModal

        function guardar() {
            if (validaPopup()) {

            
                var data = {
                    usr_cuenta: $('#usr_cuenta').val(),
                    usr_password: $('#usr_pwd').val(),
                    usr_nombre: $('#usr_nombre').val(),
                    usr_apellido: $('#usr_apellido').val(),
                    usr_email: $('#usr_email').val(),
                    usr_activo: $('#cbActiv').val(),
                    usr_telefono : $('#usr_telefono').val(),
                    usr_direccion : $('#usr_direccion').val(),
                    usr_rut : $('#usr_rut').val(),
                    usr_empresa : $('#usr_empresa').val(),
                    emp_ciudad : $('#emp_ciudad').val(),
                    emp_telefono : $('#emp_telefono').val(),
                    emp_region : $('#emp_region').val(),
                    emp_rut : $('#emp_rut').val(),
                    accion:'guardar'
                };

                $.ajax({
                    type: "POST",
                    url: "Datos.aspx",
                    data: data,
                    async: false,
                    cache: false,
                    success: function (msg) {
                        var respuesta = JSON.parse(msg);
                        ok = JSON.parse(msg).codigo;

                    },
                    error: function (msg) {
                        alert('Error  ' + msg.responseText);
                    }
                });
                    if (ok == 1) {
                        alert('Usuario guardado con éxito');
                        document.getElementById('cerrarPopoup').click();
                        cargarTabla();
                    } if (ok == 2) {
                        alert('Usuario actualizado con éxito');
                        document.getElementById('cerrarPopoup').click();
                        cargarTabla();
                    } else {
                    if (ok.mensaje != undefined) {
                        alert('Error: ' + ok.mensaje);
                    }
                }
                } else {
                    alert('Debe llenar todos los campos');
            }
        }//fin guardar

        function deleteUser(usr) {
            var data = {
                usr_cuenta: usr,
                accion: "eliminar"
            };
            $.ajax({
                type: "POST",
                url: "Datos.aspx",
                data: data,
                async: false,
                cache: false,
                success: function (msg) {
                    var respuesta = JSON.parse(msg);
                    ok = JSON.parse(msg).codigo;

                },
                error: function (msg) {
                    alert('Error  ' + msg.responseText);
                }
            });
            if (ok == 1) {
                alert('Usuario eliminado con éxito');
                cargarTabla();
            } else {
                alert('Error: ' + ok.mensaje);
            }
        }

        function validaPopup() {
            if ($('#emp_rut').val() != "" && $('#emp_region').val() != "" && $('#emp_telefono').val() != "" && $('#emp_ciudad').val() != "" && $('#usr_empresa').val() != "" && $('#usr_rut').val() != "" && $('#usr_cuenta').val() != "" && $('#usr_pwd').val() != "" && $('#usr_nombre').val() != "" && $('#usr_apellido').val() != "" && $('#usr_email').val() != "" && $('#usr_telefono').val() != "" && $('#usr_telefono').val() != "" && $('#usr_direccion').val() != "") {
                return true;
            } else {
                return false
            }
        }
    </script>
</asp:Content>

