#include <iostream>
#include <vector>

struct ListNode {
	int val;
	ListNode *next;
	ListNode() : val(0), next(nullptr) {}
	ListNode(int x) : val(x), next(nullptr) {}
	ListNode(int x, ListNode *next) : val(x), next(next) {}
};


ListNode* mergeKLists(vector<ListNode*>& lists) {  
	int len = lists.size();	
	ListNode* temp = nullptr;

	for(int i = 0; i < len; i++){
		temp = merge(temp, lists[i]);
	} 

	return temp; 
}

ListNode* merge(ListNode* l1, ListNode* l2){
	ListNode dummy =  ListNode(0);
	ListNode* temp = &dummy;

	while(l1 && l2){
		if(l1->val <= l2->val){
			temp->next = l1;
			l1 = l1->next;
			temp = temp->next;
		} else{
			temp->next = l2;
			l2 = l2->next;
			temp = temp->next;
		}
	}

	if(l1){
		temp->next = l1;
	}

	if(l2){
		temp->next = l2;
	}

	return dummy.next;
}