<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'snoopy');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'Lv57AUKVa[*bTAFdsm&qd4Z,#YeAA^m<A4tajTg2ml<l}$- 1^f1${{TT%=M+:0!');
define('SECURE_AUTH_KEY',  '@[Dbsn.aIU] jtM<xSM{vy*3B^jC[^ZX{4(ug7tU22%HJ2!;LI=.}S^qC+!^1B`;');
define('LOGGED_IN_KEY',    'c}Gk/oT)3$C*Z`(kBQYFWxRzd^4h{^iAc5< )`=l:F~OY@{V`?MHeJJg3N%iT5*@');
define('NONCE_KEY',        'Md`!JF5col&,R^jI}PL5{_G=0R>e|!$ %*U-R}n-1wVz3](.sE9E.eM]OKsy`,##');
define('AUTH_SALT',        'YZ.YN|-&vvp).${dnp&]GH0Z#F<FXz`D*[9[iy7#!m@Zb$w`]5dgBILkNzZ:^${R');
define('SECURE_AUTH_SALT', 'B-`h:(Jg3KAjo7rXJZg8wc;V3@3i*o;M:k8msZgxphAw_)j5B@Xj7>*Zv=Sd3y|z');
define('LOGGED_IN_SALT',   'OAd XavyvI4/{C|l{~G2$^b04M8#nUU}xp9{qJBn`-*nvNKCK]4q952&OZN%qQ9:');
define('NONCE_SALT',       'xkG#3an:GwjS-<LT.(OrZ*0YAI!4e6X|v aupx*qm;]qbR<2.3w#?C^iOBdU)?Q ');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
