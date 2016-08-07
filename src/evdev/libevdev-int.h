/*
 * Copyright © 2013 Red Hat, Inc.
 *
 * Permission to use, copy, modify, distribute, and sell this software and its
 * documentation for any purpose is hereby granted without fee, provided that
 * the above copyright notice appear in all copies and that both that copyright
 * notice and this permission notice appear in supporting documentation, and
 * that the name of the copyright holders not be used in advertising or
 * publicity pertaining to distribution of the software without specific,
 * written prior permission.  The copyright holders make no representations
 * about the suitability of this software for any purpose.  It is provided "as
 * is" without express or implied warranty.
 *
 * THE COPYRIGHT HOLDERS DISCLAIM ALL WARRANTIES WITH REGARD TO THIS SOFTWARE,
 * INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS, IN NO
 * EVENT SHALL THE COPYRIGHT HOLDERS BE LIABLE FOR ANY SPECIAL, INDIRECT OR
 * CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE,
 * DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER
 * TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE
 * OF THIS SOFTWARE.
 */

#ifndef LIBEVDEV_INT_H
#define LIBEVDEV_INT_H

#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
#include <errno.h>
#include "libevdev.h"

#define MAX_NAME 256
#define ABS_MT_MIN ABS_MT_SLOT
#define ABS_MT_MAX ABS_MT_TOOL_Y
#define ABS_MT_CNT (ABS_MT_MAX - ABS_MT_MIN + 1)
#define LIBEVDEV_EXPORT __attribute__((visibility("default")))
#define ALIAS(_to) __attribute__((alias(#_to)))
#define NLONGS(x) (((x) + LONG_BITS - 1) / LONG_BITS)
#define LONG_BITS (sizeof(long) * 8)

/**
 * Sync state machine:
 * default state: SYNC_NONE
 *
 * SYNC_NONE → SYN_DROPPED or forced sync → SYNC_NEEDED
 * SYNC_NEEDED → libevdev_next_event(LIBEVDEV_READ_FLAG_SYNC) → SYNC_IN_PROGRESS
 * SYNC_NEEDED → libevdev_next_event(LIBEVDEV_READ_FLAG_SYNC_NONE) → SYNC_NONE
 * SYNC_IN_PROGRESS → libevdev_next_event(LIBEVDEV_READ_FLAG_SYNC_NONE) → SYNC_NONE
 * SYNC_IN_PROGRESS → no sync events left → SYNC_NONE
 *
 */
enum SyncState {
	SYNC_NONE,
	SYNC_NEEDED,
	SYNC_IN_PROGRESS,
};

struct mt_sync_state {
	int code;
	int val[];
};

/**
 * Internal only: log data used to send messages to the respective log
 * handler. We re-use the same struct for a global and inside
 * struct libevdev.
 * For the global, device_handler is NULL, for per-device instance
 * global_handler is NULL.
 */
struct logdata {
	enum libevdev_log_priority priority;		/** minimum logging priority */
	libevdev_log_func_t global_handler;		/** global handler function */
	libevdev_device_log_func_t device_handler;	/** per-device handler function */
	void *userdata;					/** user-defined data pointer */
};

struct libevdev {
	int fd;
	bool initialized;
	char *name;
	char *phys;
	char *uniq;
	struct input_id ids;
	int driver_version;
	unsigned long bits[NLONGS(EV_CNT)];
	unsigned long props[NLONGS(INPUT_PROP_CNT)];
	unsigned long key_bits[NLONGS(KEY_CNT)];
	unsigned long rel_bits[NLONGS(REL_CNT)];
	unsigned long abs_bits[NLONGS(ABS_CNT)];
	unsigned long led_bits[NLONGS(LED_CNT)];
	unsigned long msc_bits[NLONGS(MSC_CNT)];
	unsigned long sw_bits[NLONGS(SW_CNT)];
	unsigned long rep_bits[NLONGS(REP_CNT)]; /* convenience, always 1 */
	unsigned long ff_bits[NLONGS(FF_CNT)];
	unsigned long snd_bits[NLONGS(SND_CNT)];
	unsigned long key_values[NLONGS(KEY_CNT)];
	unsigned long led_values[NLONGS(LED_CNT)];
	unsigned long sw_values[NLONGS(SW_CNT)];
	struct input_absinfo abs_info[ABS_CNT];
	int *mt_slot_vals; /* [num_slots * ABS_MT_CNT] */
	int num_slots; /**< valid slots in mt_slot_vals */
	int current_slot;
	int rep_values[REP_CNT];

	enum SyncState sync_state;
	enum libevdev_grab_mode grabbed;

	struct input_event *queue;
	size_t queue_size; /**< size of queue in elements */
	size_t queue_next; /**< next event index */
	size_t queue_nsync; /**< number of sync events */

	struct timeval last_event_time;

	struct {
		struct mt_sync_state *mt_state;
		size_t mt_state_sz;		 /* in bytes */
		unsigned long *slot_update;
		size_t slot_update_sz;		 /* in bytes */
		unsigned long *tracking_id_changes;
		size_t tracking_id_changes_sz;	 /* in bytes */
	} mt_sync;

	struct logdata log;
};

#endif
