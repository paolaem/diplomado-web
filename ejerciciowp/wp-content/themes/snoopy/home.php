<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package snoopy
 */

get_header();
?>
<?php 
    #query_post(array(
    #   'orderby' => 'title',
    #));
?>

    <main class="page-main clearfix">
    	<section class="section section-blog">
            <h2><?php wp_title(''); ?></h2>
            <?php if ( have_posts() ) : ?>
                <?php while ( have_posts() ) : the_post(); ?>

                    <article class="article-blog">
                        <header>
                            <h3><a href="<?php the_permalink(); ?>"><?php the_title();?></a></h3>
                            <time datetime="<?php the_time('Y-m-d'); ?>"><?php the_time('d \d\e F,Y'); ?></time>
                            <a href="<?php the_permalink(); ?>">
                                <?php if ( has_post_thumbnail() ) : ?>
                                    <?php the_post_thumbnail('thumbnail'); ?>
                                <?php else: ?>
                                    <img src="<?php bloginfo ('template_url'); ?>/images/default.png" alt="Snoopy">
                                <?php endif; ?>
                            </a>
                        </header>
                        <main>
                            <?php the_excerpt(); ?>
                        </main>
                        <footer>
                            <small>Autor: <?php the_author(); ?></small>
                        </footer>
                    </article>

                <?php endwhile; ?>
                <?php the_posts_pagination(array(
                    'prev_text' => 'Anterior',
                    'screen_reader_text' => ' ',
                )); ?>

            <?php else :?> 
            <p>No hay artículos para mostrar</p>   
			<?php endif; ?>
        </section>

        <aside class="aside-blog">
            <?php get_sidebar(); ?>
        </aside>
    </main>
	
<?php
get_footer();
