use crate::export;
pub use fltk_sys::fl::*;

export!(fn app_init_all() -> (), Fl_init_all);
export!(fn app_run() -> i32, Fl_run);
