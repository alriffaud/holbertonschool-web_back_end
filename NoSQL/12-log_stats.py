#!/usr/bin/env python3
"""This module provides some stats about Nginx logs stored in MongoDB"""
from pymongo import MongoClient


def get_logs_stats(mongo_collection):
    """
    This function gets statistics about Nginx logs stored in MongoDB.
    """
    stats = {}
    stats['total_logs'] = mongo_collection.count_documents({})
    methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]
    for method in methods:
        stats['method_' + method] = mongo_collection.count_documents(
            {"method": method})
    stats['status_check'] = mongo_collection.count_documents(
        {"method": "GET", "path": "/status"})
    return (stats)


def main():
    """
    This is the main function.
    """
    client = MongoClient('mongodb://127.0.0.1:27017')
    db = client.logs
    nginx_collection = db.nginx
    stats = get_logs_stats(nginx_collection)
    print("{} logs".format(stats['total_logs']))
    print("Methods:")
    for method in ["GET", "POST", "PUT", "PATCH", "DELETE"]:
        print("    method {}: {}".format(method, stats['method_' + method]))
    print("{} status check".format(stats['status_check']))


if __name__ == "__main__":
    main()
