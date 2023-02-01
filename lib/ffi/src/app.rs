use crate::export;
pub use fltk_sys::fl::*;
use lazy_static::lazy_static;
use std::{mem::take, sync::Mutex};

pub type Callback = unsafe extern "C" fn();

lazy_static! {
    static ref QUEUE: Mutex<Vec<Callback>> = Mutex::new(Vec::new());
}

pub fn enqueue(cb: Callback) {
    QUEUE.lock().unwrap().push(cb);
}

#[no_mangle]
extern "C" fn app_sync() {
    let cbs: Vec<Callback> = take(&mut *QUEUE.lock().unwrap());
    for cb in cbs {
        unsafe { cb() };
    }
}

export!(fn app_init_all() -> (), Fl_init_all);
export!(fn app_run() -> i32, Fl_run);
