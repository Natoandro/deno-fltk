use lazy_static::lazy_static;
use std::collections::VecDeque;
use std::sync::Mutex;

lazy_static! {
    static ref QUEUE: Mutex<VecDeque<u32>> = Mutex::new(VecDeque::new());
}

#[no_mangle]
pub extern "C" fn sync_poll() -> u32 {
    QUEUE.lock().unwrap().pop_front().unwrap_or(0)
}

pub fn push(n: u32) {
    QUEUE.lock().unwrap().push_back(n);
}
