<?php
/**
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package snoopy
 */

get_header();
?>

	<main class="page-main">
    	<section class="section">

			<?php if ( have_posts() ) : ?>
				<?php while ( have_posts() ) : the_post(); ?>                        

					<h2><?php the_title(); ?></h2>
						<?php if ( has_post_thumbnail() ) : ?>
							<?php the_post_thumbnail(); ?>
						<?php else: ?>
							<img src="<?php bloginfo ('template_url'); ?>/images/default.png" alt="Snoopy">
						<?php endif; ?>
					<div class="wp-gallery">
						<?php 
							if ( function_exists( 'rl_gallery' ) ) { rl_gallery( '71' ); }
						?>
					</div>
					<div><?php the_content(); ?></div>

				<?php endwhile; ?>
			<?php endif; ?>
		</section>
	</main>

<?php

get_footer();
