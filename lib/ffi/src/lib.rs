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

pub use fltk_sys::fl::*;
pub use fltk_sys::window::*;

export!(fn app_init_all() -> (), Fl_init_all);
export!(fn app_run() -> i32, Fl_run);

export!(fn window_create(x: i32, y: i32, width: i32, height: i32, title: *const i8) -> *mut Fl_Window, Fl_Window_new);
export!(fn window_show(win: *mut Fl_Window), Fl_Window_show);
