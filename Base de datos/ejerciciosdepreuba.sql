use lead_gen_business;
-- select * from billing;
/*Encontrar todos los clientes (nombre y apellido) con sus facturas y montos de fechas de facturacion*/
/*select clients.first_name nombre , clients.last_name apellido, billing.amount monto, billing.charged_datetime fechafact
from clients
join billing on clients_id = billing.clients_id;   */
/*Listar todos los nombres de dominio y clientes potenciales(nombre y apellido) para cada sitio*/
select *
from sites
join leads on sites_id = leads.sites_id;

/*Mostrar el nombre de los clientes, su dominio y el nombre y apellido de los clientes potenciales (que son los leads) generados por los sitios */

/*select clients.first_name nombre, clients.last_name, sites.domain_name, leads.first_name leads_first
from clients
join sites on clients.id = sites.clients_id
join leads on sites.id = leads.sites_id;*/

