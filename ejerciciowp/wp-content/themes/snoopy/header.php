<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package snoopy
 */

?>

<!doctype html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>" />
<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>

<div class="container">
	<header class="page-header">
    	<h1><?php bloginfo( 'name' ); ?></h1>
    	<img src="<?php bloginfo ('template_url'); ?>/images/bg_header.jpg" alt="Snoopy">
    </header>
    <?php
        wp_nav_menu(array(
            'theme_location' => 'menu-1',
            'container' => 'nav',
            'container_id' => 'pageNav',
            'container_class' => 'page-nav',
            'menu_class' => 'clearfix',
        ));
    ?>
    <!-- <nav class="page-nav">
    	<ul class="clearfix">
        	<li><a href="index.html" title="Inicio">Inicio</a></li>
            <li><a href="servicios.html" title="Servicios">Servicios</a></li>
            <li><a href="blog.html" title="Blog">Blog</a></li>
            <li><a href="contacto.html" title="Contacto">Contacto</a></li>
        </ul>
    </nav> -->