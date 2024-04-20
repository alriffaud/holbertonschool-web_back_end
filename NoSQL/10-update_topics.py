#!/usr/bin/env python3
"""This module defines the update_topics function"""


def update_topics(mongo_collection, name, topics):
    """
    This function changes all topics of a school document based on the name.
    """
    mongo_collection.update_many(
        {"name": name},
        {"$set": {"topics": topics}}
    )
