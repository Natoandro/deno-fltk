use crate::export;
pub use fltk_sys::fl::*;

export!(fn app_init_all() -> (), Fl_init_all);
export!(fn app_unlock(), Fl_unlock);
export!(fn app_awake(), Fl_awake);

#[no_mangle]
pub unsafe extern "C" fn app_lock() {
    if Fl_lock() != 0 {
        panic!("Threading not supported")
    }
}

#[no_mangle]
pub unsafe extern "C" fn app_run() -> i32 {
    Fl_lock();
    Fl_run()
}
