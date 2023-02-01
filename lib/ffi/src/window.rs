use crate::export;
pub use fltk_sys::window::*;

export!(fn window_create(x: i32, y: i32, width: i32, height: i32, title: *const i8) -> *mut Fl_Window, Fl_Window_new);
export!(fn window_end(win: *mut Fl_Window), Fl_Window_end);
export!(fn window_show(win: *mut Fl_Window), Fl_Window_show);
