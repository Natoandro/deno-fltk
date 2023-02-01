use std::{ffi::c_void, mem::transmute};

use crate::{
    app::{enqueue, Callback},
    export,
};
pub use fltk_sys::button::*;

export!(fn button_create(x: i32, y: i32, width: i32, height: i32, title: *const i8) -> *mut Fl_Button, Fl_Button_new);

#[no_mangle]
pub unsafe extern "C" fn button_set_callback(bt: *mut Fl_Button, cb: Callback) {
    Fl_Button_set_callback(bt, Some(callback), transmute(cb))
}

unsafe extern "C" fn callback(_w: *mut Fl_Widget, data: *mut c_void) {
    let cb: Callback = transmute(data);
    enqueue(cb);
}
