<?php
/**
 * Main Template File
 * 
 * @package TitanTrucking
 */

get_header(); ?>

<main id="main" class="site-main">
    <div class="container">
        
        <?php if (have_posts()) : ?>
            
            <div class="posts-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                
                <?php while (have_posts()) : the_post(); ?>
                    
                    <article id="post-<?php the_ID(); ?>" <?php post_class('card'); ?>>
                        
                        <?php if (has_post_thumbnail()) : ?>
                            <div class="post-thumbnail">
                                <a href="<?php the_permalink(); ?>">
                                    <?php the_post_thumbnail('medium', array('class' => 'w-full h-48 object-cover')); ?>
                                </a>
                            </div>
                        <?php endif; ?>
                        
                        <div class="card-content">
                            <header class="entry-header">
                                <h2 class="entry-title">
                                    <a href="<?php the_permalink(); ?>" rel="bookmark">
                                        <?php the_title(); ?>
                                    </a>
                                </h2>
                                
                                <div class="entry-meta">
                                    <time class="published" datetime="<?php echo get_the_date('c'); ?>">
                                        <?php echo get_the_date(); ?>
                                    </time>
                                    <span class="byline">
                                        <?php _e('by', 'titan-trucking'); ?> 
                                        <span class="author vcard">
                                            <a class="url fn n" href="<?php echo esc_url(get_author_posts_url(get_the_author_meta('ID'))); ?>">
                                                <?php echo get_the_author(); ?>
                                            </a>
                                        </span>
                                    </span>
                                </div>
                            </header>
                            
                            <div class="entry-summary">
                                <?php the_excerpt(); ?>
                            </div>
                            
                            <footer class="entry-footer">
                                <a href="<?php the_permalink(); ?>" class="btn btn-primary">
                                    <?php _e('Read More', 'titan-trucking'); ?>
                                </a>
                            </footer>
                        </div>
                        
                    </article>
                    
                <?php endwhile; ?>
                
            </div>
            
            <?php
            // Pagination
            the_posts_pagination(array(
                'mid_size' => 2,
                'prev_text' => __('Previous', 'titan-trucking'),
                'next_text' => __('Next', 'titan-trucking'),
            ));
            ?>
            
        <?php else : ?>
            
            <section class="no-results not-found">
                <header class="page-header">
                    <h1 class="page-title"><?php _e('Nothing here', 'titan-trucking'); ?></h1>
                </header>
                
                <div class="page-content">
                    <?php if (is_home() && current_user_can('publish_posts')) : ?>
                        
                        <p>
                            <?php
                            printf(
                                wp_kses(
                                    __('Ready to publish your first post? <a href="%1$s">Get started here</a>.', 'titan-trucking'),
                                    array('a' => array('href' => array()))
                                ),
                                esc_url(admin_url('post-new.php'))
                            );
                            ?>
                        </p>
                        
                    <?php elseif (is_search()) : ?>
                        
                        <p><?php _e('Sorry, but nothing matched your search terms. Please try again with some different keywords.', 'titan-trucking'); ?></p>
                        <?php get_search_form(); ?>
                        
                    <?php else : ?>
                        
                        <p><?php _e('It seems we can\'t find what you\'re looking for. Perhaps searching can help.', 'titan-trucking'); ?></p>
                        <?php get_search_form(); ?>
                        
                    <?php endif; ?>
                </div>
            </section>
            
        <?php endif; ?>
        
    </div>
</main>

<?php
get_sidebar();
get_footer();
?>