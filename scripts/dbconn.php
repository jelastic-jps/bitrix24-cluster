<? 
define("SHORT_INSTALL", true);
define("SHORT_INSTALL_CHECK", true);

define("MYSQL_TABLE_TYPE", "INNODB");
define("BX_UTF", true);

define("DBPersistent", false);
\$DBType = "mysql";
\$DBHost = "DB:3306";
\$DBName = "sitemanager";
\$DBLogin = "DB_USER";
\$DBPassword = "DB_PASS";
\$DBDebug = false;
\$DBDebugToFile = false;

define("BX_FILE_PERMISSIONS", 0664);
define("BX_DIR_PERMISSIONS", 0775);
@umask(~BX_DIR_PERMISSIONS);

define("BX_USE_MYSQLI", true);
define("DELAY_DB_CONNECT", true);
define("CACHED_menu", 3600);
define("CACHED_b_file", 3600);
define("CACHED_b_file_bucket_size", 10);
define("CACHED_b_lang", 3600);
define("CACHED_b_option", 3600);
define("CACHED_b_lang_domain", 3600);
define("CACHED_b_site_template", 3600);
define("CACHED_b_event", 3600);
define("CACHED_b_agent", 3660);
#define('BX_SECURITY_SESSION_MEMCACHE_HOST', 'intIP');
#define('BX_SECURITY_SESSION_MEMCACHE_PORT', 11211);
#define("BX_CACHE_TYPE", "memcached");
#define("BX_CACHE_SID", $_SERVER["DOCUMENT_ROOT"]."#01");
#define("BX_MEMCACHE_HOST", "intIP");
#define("BX_MEMCACHE_PORT", "11211");
\$_SERVER["REMOTE_ADDR"] = \$_SERVER['HTTP_CF_CONNECTING_IP'];
?>
