mod app;
mod button;
mod window;

#[macro_export]
macro_rules! export {
    (fn $name:ident($( $arg:ident : $type: ty ),*) -> $ret:ty, $orig:path) => {
        #[no_mangle]
        pub unsafe extern "C" fn $name($( $arg : $type ),*) -> $ret {
            $orig($( $arg ),*)
        }
    };
    (fn $name:ident($( $arg:ident : $type:ty ),*), $orig:path) => {
        export!(fn $name($( $arg : $type ),*) -> (), $orig);
    }
}
