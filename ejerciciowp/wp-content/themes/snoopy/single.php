<?php
/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package snoopy
 */

get_header();
?>
 
 <main class="page-main clearfix">
    	<section class="section">
            <?php if ( have_posts() ) : ?>
                <?php while ( have_posts() ) : the_post(); ?>

                    <article class="article-blog">
                        <header>
                            <h3><?php the_title();?></h3>
                            <time datetime="<?php the_time('Y-m-d'); ?>"><?php the_time('d \d\e F,Y'); ?></time>
                                <?php if ( has_post_thumbnail() ) : ?>
                                    <?php the_post_thumbnail(); ?>
                                <?php else: ?>
                                    <img src="<?php bloginfo ('template_url'); ?>/images/default.png" alt="Snoopy">
                                <?php endif; ?>
                        </header>
                        <main>
                            <?php the_content(); ?>
                        </main>
                        <footer>
                            <small>Autor: <?php the_author(); ?></small>
                        </footer>
                    </article>

                <?php endwhile; ?>
			<?php endif; ?>
        </section>
    </main>

<?php

get_footer();
